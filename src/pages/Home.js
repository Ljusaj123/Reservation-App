import React from "react";
import { Header } from "../components/Header";
import { RatingList } from "../components/RatingList";
import { CardsList } from "../components/CardsList";
import { cityImageList, propertyImageList } from "../const/Lists";
import { Email } from "../components/Email";
import { Footer } from "../components/Footer";

function Home() {
  const cityUrl =
    "http://localhost:5000/api/v1/hotels/count/city?cities=dublin,berlin,paris";
  const propertyUrl = "http://localhost:5000/api/v1/hotels/count/type";
  const ratingUrl =
    "http://localhost:5000/api/v1/hotels?featured=true&limit=4&max=400";
  return (
    <div>
      <Header />
      <main className="home-container container">
        <h2 className="home__title">Browse by city</h2>
        <CardsList images={cityImageList} url={cityUrl} />
        <h2 className="home__title ">Browse by property type</h2>
        <CardsList images={propertyImageList} url={propertyUrl} />
        <Email />
        <h2 className="home__title ">Home guests love</h2>
        <RatingList url={ratingUrl} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
