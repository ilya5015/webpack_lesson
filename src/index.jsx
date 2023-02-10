import * as $ from "jquery";
import Post from "@models/Post";
import "./styles/styles.css";
import Logo from "./assets/logo.png";
import Xml from "./assets/data.xml";
import Csv from "./assets/csv.csv";
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/less.less";
import "./styles/scss.scss";
import start from "./babel";

const post = new Post("Post title", Logo);

$("pre").html(post.toString());

console.log("Post to str: ", post.toString());
console.log("Xml: ", Xml);
console.log("Csv: ", Csv);

const App = () => (
  <div className="container">
    <h1>Webpack lesson</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre></pre>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
);

const domNode = document.getElementById("App");
const root = createRoot(domNode);

root.render(<App />);

start().then(console.log("start"));
