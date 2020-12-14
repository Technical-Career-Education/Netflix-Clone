import React from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Home/Banner/Banner";
import Sections from "../../components/Home/Sections/Sections";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="row">
        <Sections />
      </div>
    </div>
  );
}
