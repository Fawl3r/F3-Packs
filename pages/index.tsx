import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Home1.module.css";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
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
        <div className={styles.heroBodyContainer}>
          <div className={styles.heroBody}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={styles.heroTitle}
            >


              <span className={styles.heroTitleGradient}>
                <i>Collect F3 Packs!</i>
              </span>
              <br />
              Your F3 Dominion Journey Starts Here.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={styles.heroSubtitle}
            >
              <Link href="https://godsofgaming.games">
                Gods Of Gaming
              </Link>{" "}
              Presents: <i>F3 Dominion — Fortune, Prosperity, Destiny!</i>.
            </motion.p>

            <div className={styles.heroCtaContainer}>
  <Link href="/shop">
    <b className={styles.buyPacks}>Buy Packs</b>
  </Link>
              <Link href="https://gods-of-gaming.gitbook.io/gods-of-gaming-whitepaper/the-numbers/revenue-sharing-investing-in-the-gods-of-gaming-ecosystem/f3-warriors-revenue-sharing-season-1-exclusivity">
                My Packs
              </Link>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;