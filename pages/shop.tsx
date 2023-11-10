import { useContract, useValidDirectListings } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS, PACK_ADDRESS } from "../const/addresses";
import styles from "../styles/Home1.module.css";
import { PackNFTCard } from "../components/PackNFT";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Shop() {
    const {
        contract: marketplace,
        isLoading: loadingMarketplace,
    } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const {
        data: directListings,
        isLoading: loadingDirectListings,
    } = useValidDirectListings(
        marketplace,
        {
            tokenContract: PACK_ADDRESS,
        }
    );
    console.log("DirectPack", directListings);

    return (
        <motion.div // Wrap the entire component with motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on component mount
            transition={{ duration: 1 }} // Animation duration
            className={styles.container}
        >
            {/* Background Video */}
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

            {/* Content */}
            <div className={styles.content}>
                <motion.h1 // Wrap the heading with motion.h1
                    initial={{ opacity: 0, y: -20 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation on component mount
                    transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                >
                    Shop Packs
                </motion.h1>
                <div className={styles.grid}>
                    {!loadingDirectListings ? (
                        directListings?.map((listing, index) => (
                            <motion.div // Wrap each card with motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                animate={{ opacity: 1, y: 0 }} // Animation on component mount
                                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                            >
                                <PackNFTCard
                                    contractAddress={listing.assetContractAddress}
                                    listingId={listing.id}
                                    tokenId={listing.tokenId}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
