import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
// import MyProvider from "./components/MyContext";
import "./index.css"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <MyProvider> */}
    <Theme>
      <App />
    {/* </MyProvider> */}
    </Theme>
  </StrictMode>
);
