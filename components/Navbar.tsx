import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isTravelDropdownOpen, setIsTravelDropdownOpen] = useState(false);

  function disconnectWallet() {
    disconnect();
    setIsProfileDropdownOpen(false);
  }

  // Apply smooth transition for dropdown
  const dropdownVariants = {
    opened: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
      },
      display: "block",
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // Custom style for the "Travel" link
  const travelLinkStyle = {
    fontSize: "25px", // Adjust the font size as needed
  };

  return (
    <div className={`${styles.container} ${styles.transparentBackground}`}>
      <div className={`${styles.navbar} ${styles.transparentBackground}`}>
        <div className={styles.navbarLogo}>
          <Link href="/">
            <img
              src={`https://static.wixstatic.com/media/1808ae_d7e2677e53784c8eba07a386e424d352~mv2.png`}
              alt="Logo"
              width={80}
              height={64}
            />
          </Link>
        </div>
        <div className={styles.navLinks}>
          {/* "Travel" Link */}
          <div
            className={styles.travelLink}
            onMouseEnter={() => setIsTravelDropdownOpen(true)}
            onMouseLeave={() => setIsTravelDropdownOpen(false)}
            style={travelLinkStyle} // Apply the font size here
          >
            Menu
            {isTravelDropdownOpen && (
              <motion.div
                className={styles.travelDropdown}
                initial="closed"
                animate={isTravelDropdownOpen ? "opened" : "closed"}
                variants={dropdownVariants}
              >
                <Link href="/shop">
                  <p>Buy Packs</p>
                </Link>
                <Link href="/myPacks">
                  <p>My Packs</p>
                </Link>
                <Link href="/myCards">
                  <p>My NFTs</p>
                </Link>
                <Link href="https://f3-nexium-marketplace.vercel.app/">
                  <p>Nexium Marketplace</p>
                </Link>
                <Link href="#">
                  <p>Limited Editions</p>
                </Link>
                <Link href="#">
                  <p>F3 Headquarters</p>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
        <div className={styles.navbarAvatar}>
          {!address ? (
            <ConnectWallet
              btnTitle="Login"
              theme="light"
              className={styles.connectWalletBtn}
            />
          ) : (
            <div onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
              <img
                src={`https://static.wixstatic.com/media/1808ae_089d68a117034dc8bfd737aec5d6bccc~mv2.gif`}
                alt="avatar"
                className={styles.avatar}
              />
            </div>
          )}
          {isProfileDropdownOpen && (
            <motion.div
              className={styles.profileDropdown}
              initial="closed"
              animate={isProfileDropdownOpen ? "opened" : "closed"}
              variants={dropdownVariants}
            >
              <Link href="/myPacks">
                <p>My Packs</p>
              </Link>
              <Link href="/myCards">
                <p>My NFTs</p>
              </Link>
              <Link href="https://f3-nexium-marketplace.vercel.app/">
                <p>Nexium Marketplace</p>
              </Link>
              <button onClick={disconnectWallet}>Logout</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
