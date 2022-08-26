import React from "react";
import { Header } from "../components/Header";
import { RatingList } from "../components/RatingList";
import { CardsList } from "../components/CardsList";
import { cityList, propertyList, ratingList } from "../const/Lists";
import { Email } from "../components/Email";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <main className="home-container container">
        <h2 className="home__title">Browse by city</h2>
        <CardsList props={cityList} />
        <h2 className="home__title ">Browse by property type</h2>
        <CardsList props={propertyList} />
        <Email />
        <h2 className="home__title ">Home guests love</h2>
        <RatingList props={ratingList} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
