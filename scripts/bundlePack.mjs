import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "binance");

    const packAddress = "0x4a9BF355D04bB1236128f3289F34f0dBF53e91D2";
    const cardAddress = "0xB8a33200A4a09d8c5F5313D6a19A9609B916479e";

    const pack = sdk.getContract(packAddress, "pack");

    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://QmTYxoMb4njzB7EztxLrvPbP3fNC7TvkfCRQAyZD6M2ZBv/fawl3r_space_age_loot_chest_60a047e5-57ac-463a-8df7-600dd8f5fbe6.png";

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Standard Warrior Pack",
            description: "Standard F3 Warrior Pack",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 185,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 186,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 187,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 188,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 189,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 190,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 191,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 192,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 193,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 194,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 195,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 196,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 197,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 198,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 199,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 200,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 201,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 202,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 203,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 204,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 205,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 206,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 207,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 208,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 209,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 210,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 211,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 212,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 213,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 214,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 215,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 216,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 221,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 218,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 219,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 220,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 221,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 222,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 223,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 224,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 225,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 226,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 227,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 228,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 229,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 230,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 231,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 232,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 233,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 234,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId:235,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 236,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 237,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 238,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 239,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 240,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 242,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 243,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 244,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 245,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 246,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 247,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 248,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 249,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 250,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 251,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 252,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 254,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 255,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 256,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 257,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 258,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 259,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 260,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 261,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 262,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 263,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 264,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 265,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 266,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 267,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 268,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 269,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 270,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 271,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 272,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 273,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 274,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 275,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 276,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 277,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 278,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 279,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 280,
                quantityPerReward: 1,
                totalRewards:21,
            },
            {
                contractAddress: cardAddress,
                tokenId: 415,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 416,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 421,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 418,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 419,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 420,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 421,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 422,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 423,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 424,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 425,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 426,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 427,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 428,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 429,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 430,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 431,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 432,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 433,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 434,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 435,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 436,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 437,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 438,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 439,
                quantityPerReward: 1,
                totalRewards:6,
            },
            {
                contractAddress: cardAddress,
                tokenId: 441,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 442,
                quantityPerReward: 1,
                totalRewards:100,
            },




            
        ],
        rewardsPerPack: 5,
    });

    console.log("Packs created");
})();