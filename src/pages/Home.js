import React from "react";
import { Header } from "../components/Header";
import { Featured } from "../components/Featured";

function Home() {
  return (
    <div>
      <Header />
      <main className="home-container">
        <Featured />
      </main>
    </div>
  );
}

export default Home;
