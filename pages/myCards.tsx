import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import sharedStyles from "../styles/sharedStyles.module.css";
import { CARD_ADDRESS } from "../const/addresses";

import { useState, useEffect, useRef } from "react";


import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import { ListingInfo } from "../components/ListingInfo";
import { motion } from "framer-motion";

export default function MyCards() {
  const address = useAddress();

  const {
    contract: nftCollection,
    isLoading: loadingNFTCollection,
  } = useContract(CARD_ADDRESS, "edition");

  const { data: nfts, isLoading: loadingNFTs } = useOwnedNFTs(
    nftCollection,
    address
  );
  console.log(nfts);

  const [selectedNFT, setSelectedNFT] = useState<NFTType>();
  const [page, setPage] = useState(1);
  const perPage = 10; // Number of items to load per page
  const loadingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, []);

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

      <h1>My NFTs</h1>
      <div className={styles.grid}>
        {!selectedNFT ? (
          !loadingNFTCollection && !loadingNFTs ? (
            nfts
              ?.slice(0, page * perPage)
              .map((nft, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.nftCard}
                >
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <div className={styles.myCardInfo}>
                    <h3>{nft.metadata.name}</h3>
                    <p>Qty: {nft.quantityOwned}</p>
                  </div>
                </motion.div>
              ))
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <div className={styles.saleCard}>
            <div>
              <button onClick={() => setSelectedNFT(undefined)}>Back</button>
              <br />
              <ThirdwebNftMedia metadata={selectedNFT.metadata} />
            </div>
            <div>
              <p>List card for sale</p>
              <ListingInfo nft={selectedNFT} />
            </div>
          </div>
        )}
      </div>

      <div ref={loadingRef}></div>
    </motion.div>
  );
}
