import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <h1>All Movies and Books</h1>
    </div>
  );
}
export default Home;
