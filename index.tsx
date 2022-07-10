import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import { ChakraProvider } from "@chakra-ui/react";
const widgetDivs = document.querySelectorAll("#rezpond");

widgetDivs.forEach((div) => {
  let ClientId = div.getAttribute("data-client-id");
  render(
    <React.StrictMode>
      <ChakraProvider>
        <App clientId={ClientId ?? "ERROR"} />
      </ChakraProvider>
    </React.StrictMode>,
    div
  );
});
