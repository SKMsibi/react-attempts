import React from "react";
import ReactDom from 'react-dom';
import MarkConvertor from './mark-down-project/mainPage';

const app = document.getElementById("app")
ReactDom.render(<MarkConvertor />, app);