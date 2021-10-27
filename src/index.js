import React from "react";
import ReactDOM from "react-dom";

import GifExpertApp from "./components/GifExpertApp";

import "./index.css";

ReactDOM.render(
    <GifExpertApp defaultCategories={['One Piece', 'Dragon Ball']} />
    ,document.getElementById('root')
);