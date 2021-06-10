import React, { useState, useEffect } from "react";
import "./App.css";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `https://rickandmortyapi.com${path}`
    : path;
}

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url("/api"))
      .then((res) => res.json())
      .then((apiData) => setData(apiData.data));
  }, []);

  return <div> API data returned: {data}</div>;
}

export default App;
