import React from "react";
import { Header } from "../components/modules/Header";
import { Email } from "../components/modules/Email";
import { Footer } from "../components/modules/Footer";
import { RatingList } from "../components/lists/RatingList";
import { CardsList } from "../components/lists/CardsList";
import { cityImageList, propertyImageList } from "../const/Lists";

function Home() {
  const cityUrl =
    "http://localhost:5500/api/v1/hotels/count/city?cities=Split,Solin,Zadar";
  const propertyUrl = "http://localhost:5500/api/v1/hotels/count/type";

  return (
    <div>
      <Header type="homepage" />
      <main className="home-container container">
        <h2 className="home__title">Browse by city</h2>
        <CardsList images={cityImageList} url={cityUrl} type="cities" />
        <h2 className="home__title ">Browse by property type</h2>
        <CardsList
          images={propertyImageList}
          url={propertyUrl}
          type="properties"
        />
        <Email />
        <h2 className="home__title ">Home guests love</h2>
        <RatingList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
