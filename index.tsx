import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import { ChakraProvider } from "@chakra-ui/react"
const widgetDivs = document.querySelectorAll(".rezpond-widget");

widgetDivs.forEach(div =>
    render(
        <React.StrictMode>
            <ChakraProvider>
                <App clientId={div.dataset.clientid} />
            </ChakraProvider>
        </React.StrictMode>
        , div
    )

)
