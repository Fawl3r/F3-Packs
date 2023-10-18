import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { CARD_ADDRESS } from "../const/addresses";
import { useState, useEffect } from "react";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import { ListingInfo } from "../components/ListingInfo";

export default function MyCards() {
    const address = useAddress();

    const {
        contract: nftCollection,
        isLoading: loadingNFTCollection
    } = useContract(CARD_ADDRESS, "edition");

    const {
        data: nfts,
        isLoading: loadingNFTs
    } = useOwnedNFTs(nftCollection, address);
    console.log(nfts);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items to display per page

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(nfts.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNFTs = nfts?.slice(indexOfFirstItem, indexOfLastItem);

    // Use useEffect to update the URL and persist the current page
    useEffect(() => {
        // Update the URL with the current page parameter
        window.history.replaceState({}, "", `?page=${currentPage}`);
    }, [currentPage]);

    // Read the page parameter from the URL on initial load
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const pageParam = urlSearchParams.get("page");
        if (pageParam) {
            setCurrentPage(parseInt(pageParam, 10));
        }
    }, []);

    return (
        <div className={styles.container}>
            <h1>F3 NFTs</h1>
            {/* Pagination buttons at the top */}
            <div className={styles.paginationTop}>
                {nfts && nfts.length > itemsPerPage && (
                    <div>
                        <button onClick={prevPage}>Previous</button>
                        <button onClick={nextPage}>Next</button>
                    </div>
                )}
            </div>

            <div className={styles.grid}>
                {!selectedNFT ? (
                    !loadingNFTCollection && !loadingNFTs ? (
                        currentNFTs?.map((nft, index) => (
                            <div key={index} className={styles.nftCard}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                />
                                <div className={styles.myCardInfo}>
                                    <h3>{nft.metadata.name}</h3>
                                    <p>Qty: {nft.quantityOwned}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )
                ) : (
                    <div className={styles.saleCard}>
                        <div>
                            <button
                                onClick={() => setSelectedNFT(undefined)}
                            >Back</button>
                            <br />
                            <ThirdwebNftMedia
                                metadata={selectedNFT.metadata}
                            />
                        </div>
                        <div>
                            <p>List card for sale</p>
                            <ListingInfo nft={selectedNFT} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
