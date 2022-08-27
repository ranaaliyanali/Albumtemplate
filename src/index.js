import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import Album from "./album/Album";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Album />
  </StrictMode>,
  rootElement
);
