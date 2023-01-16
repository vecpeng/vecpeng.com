import "@/styles/globals.css"
import "@/styles/variables.css"
import * as TooltipUI from "@radix-ui/react-tooltip"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TooltipUI.Provider delayDuration={1200} skipDelayDuration={300}>
      <Component {...pageProps} />
    </TooltipUI.Provider>
  )
}

export default App;