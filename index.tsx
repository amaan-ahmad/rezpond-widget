import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import { ChakraProvider } from "@chakra-ui/react";
import {
  RecoilRoot
} from 'recoil';
import 'regenerator-runtime/runtime'
const div = document.querySelector("#rezpond");

if (!div) {
  throw new Error("No element with id 'rezpond' found");
}
const ClientId = div!.getAttribute("data-client-id");
render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <App clientId={ClientId ?? "ERROR"} />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  div
);
