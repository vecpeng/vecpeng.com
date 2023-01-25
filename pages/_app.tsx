import "@/styles/globals.css";
import "@/styles/variables.css";
import * as TooltipUI from "@radix-ui/react-tooltip";
import * as ToastUI from "@radix-ui/react-toast";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      enableSystem={false}
      themes={["light", "dark"]}
    >
      <TooltipUI.Provider delayDuration={800} skipDelayDuration={300}>
        <ToastUI.Provider duration={3000}>
          <Layout>
            <>
              <Component {...pageProps} />
              <Analytics />
            </>
          </Layout>
        </ToastUI.Provider>
      </TooltipUI.Provider>
    </ThemeProvider>
  );
};

export default App;
