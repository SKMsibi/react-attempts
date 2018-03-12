import React from "react";
import ReactDom from 'react-dom';
import Layout from './components/Layout'
import Form from './form/Form'


const app = document.getElementById("app")
ReactDom.render(<Form />, app);