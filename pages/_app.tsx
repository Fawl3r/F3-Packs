import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { NETWORK } from "../const/addresses";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId= {process.env.YOUR_CLIENT_ID}
    activeChain={NETWORK}
  >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );}

export default MyApp;
