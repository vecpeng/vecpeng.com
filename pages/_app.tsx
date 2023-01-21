import "@/styles/globals.css";
import "@/styles/variables.css";
import * as TooltipUI from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme = "dark" enableSystem={false} themes={["light", "dark"]}>
      <TooltipUI.Provider delayDuration={800} skipDelayDuration={300}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TooltipUI.Provider>
    </ThemeProvider>
  )
}

export default App;