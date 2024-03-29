import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import { ChakraProvider } from "@chakra-ui/react";
import {
  RecoilRoot
} from 'recoil';
import 'regenerator-runtime/runtime'
const div = document.querySelector("#root");
render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  div
);
