import { MARKETPLACE_ADDRESS, PACK_ADDRESS } from "../const/addresses";
import { MediaRenderer, Web3Button, useAddress, useContract, useDirectListings, useNFT, CurrencyValue, Price } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { id } from "ethers/lib/utils";
import React, { useState } from "react"; // Import useState from react

type Props = {
    contractAddress: string;
    tokenId: any;
    listingId: any;
};

type ListingFormData = {
    nftContractAddress: string;
    tokenId: string;
    price: string;
};

export const PackNFTCard = ({ contractAddress, tokenId, listingId }: Props) => {
    const address = useAddress();

    const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");
    const { contract: packContract } = useContract(contractAddress);
    const { data: packNFT, isLoading: loadingNFT } = useNFT(packContract, tokenId);

    const { data: packListings, isLoading: loadingPackListings } =
        useDirectListings(
            marketplace,
            {
                tokenContract: PACK_ADDRESS,
            }
        );

    // Find the specific listing based on the listingId
    const currentListing = packListings?.find(listing => listing.id === listingId);

    const [quantity, setQuantity] = useState(1); // Initialize with 1 pack

    // Function to handle user input for quantity
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    async function buyPack() {
        let txResult;

        if (currentListing) {
            txResult = await marketplace?.directListings.buyFromListing(
                currentListing.id,
                quantity // Use the selected quantity
            );
        } else {
            throw new Error("No valid listing found");
        }

        return txResult;
    };

    return (
        <div className={styles.packCard}>
            {!loadingNFT && !loadingPackListings ? (
                <div className={styles.shopPack}>
                    <div>
                        {/* Input field for quantity */}
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                        <MediaRenderer
                            src={packNFT?.metadata.image}
                            width="80%"
                            height="100%"
                        />
                    </div>
                    <div className={styles.packInfo}>
                        <h3>{packNFT?.metadata.name}</h3>

                        <p>Cost: {currentListing?.currencyValuePerToken.displayValue} {` ` + currentListing?.currencyValuePerToken.symbol}</p>
                        <p>Supply: {currentListing?.quantity}</p>
                        {!address ? (
                            <p>Login to buy</p>
                        ) : (
                            <div>
                                {/* Button to buy packs */}
                                <button onClick={() => buyPack()}>Buy Pack(s)</button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};