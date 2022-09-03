import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../components/modules/Header";
import { Email } from "../components/modules/Email";
import { Footer } from "../components/modules/Footer";
import { SearchContext } from "../context/SearchContext";

import { GoLocation } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import useFetch from "../hooks/useFetch";

function Hotel() {
  const { date, options } = useContext(SearchContext);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const { data, error, loading } = useFetch(
    `http://localhost:5500/api/v1/hotels/${id}`
  );

  const handleSlider = (i) => {
    setOpen(true);
    setSlideNumber(i);
  };

  const handleMove = (move) => {
    const numberOfPhotos = data.photos.length - 1;
    let newSlideNumber;
    if (move === "l") {
      newSlideNumber = slideNumber === 0 ? numberOfPhotos : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === numberOfPhotos ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  let days = 0;

  const countDays = () => {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const timeDiff = Math.abs(
      date[0].startDate.getTime() - date[0].endDate.getTime()
    );
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  days = countDays();

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  if (error.isError) {
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  }
  return (
    <>
      <Header type="list" />
      <div className="hotel">
        <div className="hotel-container container">
          {open && (
            <div className="slider">
              <BsFillArrowLeftCircleFill
                onClick={() => handleMove("l")}
                className="left-arrow-icon"
              />
              <BsFillArrowRightCircleFill
                onClick={() => handleMove("d")}
                className="right-arrow-icon"
              />
              <IoMdCloseCircle
                onClick={() => setOpen(false)}
                className="close-icon"
              />
              <img
                src={data.photos[slideNumber]}
                alt=""
                className="sliderImg"
              />
            </div>
          )}

          <div className="hotel__intro">
            <div className="hotel__intro-text">
              <h1 className="hotel__title">{data.name}</h1>
              <div className="hotel__address">
                <GoLocation />
                <span>
                  {data.address}, {data.city}
                </span>
              </div>
              <p className="hotel__location">
                Excellent location, {data.distance}m from center
              </p>
              <p className="hotel__price-highlight">
                Book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </p>
            </div>
            <button className="button__reserve">Reserve or Book Now!</button>
          </div>

          <div className="hotel__images">
            {data.photos &&
              data.photos.map((photo, index) => {
                return (
                  <div
                    className="hotel__image"
                    key={index}
                    onClick={() => handleSlider(index)}
                  >
                    <img src={photo} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="hotel__details">
            <div className="hotel__text">
              <h2 className="hotel__text-title">{data.title}</h2>
              <p className="hotel__desc">{data.desc}</p>
            </div>
            {days ? (
              <div className="hotel__details-price">
                <h3>Perfect for a {days}-night stay!</h3>
                <p>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </p>
                <h3>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h3>
                <button className="button__reserve">
                  Reserve or Book Now!
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </>
  );
}

export default Hotel;
