import React, { Fragment } from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes/>
      <Boxes/>
      <Boxes/>
    </main>
  );
}
 function Boxes(){
  return <Fragment>
    <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
  </Fragment>
 }