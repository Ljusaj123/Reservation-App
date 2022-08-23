import React from "react";
import { Header } from "../components/Header";
import { HomeRating } from "../components/HomeRating";
import { HomeList } from "../components/HomeList";
import { cityList, propertyList, ratingList } from "../const/Lists";
import { EmailList } from "../components/EmailList";

function Home() {
  return (
    <div>
      <Header />
      <main className="home-container container">
        <h2 className="home__title">Browse by city</h2>
        <HomeList props={cityList} />
        <h2 className="home__title ">Browse by property type</h2>
        <HomeList props={propertyList} />
        <h2 className="home__title ">Home guests love</h2>
        <HomeRating props={ratingList} />
        <EmailList />
      </main>
    </div>
  );
}

export default Home;
