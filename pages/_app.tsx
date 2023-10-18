import { ThirdwebProvider, ConnectWallet, metamaskWallet, coinbaseWallet, walletConnect, embeddedWallet, trustWallet } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="0df246a8070eeeb76c3ae5880244ec25" supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        embeddedWallet(),
        trustWallet({ recommended: true }),
      ]}>
      <ConnectWallet theme={"dark"} switchToActiveChain={true} modalSize={"wide"} />
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
