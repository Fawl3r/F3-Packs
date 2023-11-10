import { ThirdwebNftMedia, Web3Button, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'
import { PACK_ADDRESS } from '../const/addresses';
import { useState } from 'react';
import { PackRewards } from '@thirdweb-dev/sdk/dist/declarations/src/evm/schema';
import { PackRewardCard } from '../components/PackRewardCard';
import { motion } from "framer-motion"; // Import motion

export default function MyPacks() {
    const address = useAddress();

    const { contract } = useContract(PACK_ADDRESS, "pack");
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [openPackRewards, setOpenPackRewards] = useState<PackRewards>();

    async function openPack(packId: string) {
        const cardRewards = await contract?.open(parseInt(packId), 1, 100000);
        console.log(cardRewards);
        setOpenPackRewards(cardRewards);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.container} ${styles.container}`}
        >
            <div className={styles.videoBackground}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                >
                    <source src="/bghero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h1>F3 Packs</h1>
            <div className={styles.grid}>
                {!isLoading ? (
                    data?.map((pack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.nftCard}
                        >
                            <ThirdwebNftMedia
                                metadata={pack.metadata}
                            />
                            <div className={styles.myCardInfo}>
                                <h3>{pack.metadata.name}</h3>
                                <p>Qty: {pack.quantityOwned}</p>
                            </div>
                            <Web3Button
                                contractAddress={PACK_ADDRESS}
                                action={() => openPack(pack.metadata.id)}
                                className={styles.saleButton}
                            >Open Pack</Web3Button>
                        </motion.div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {openPackRewards && openPackRewards.erc1155Rewards?.length && (
                <div className={styles.container}>
                    <h3>Pack Rewards:</h3>
                    <div className={styles.grid}>
                        {openPackRewards.erc1155Rewards.map((card, index) => (
                            <PackRewardCard
                                reward={card}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}
