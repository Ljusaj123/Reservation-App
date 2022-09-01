import React, { useState } from "react";
import { Header } from "../components/modules/Header";
import { Email } from "../components/modules/Email";
import { Footer } from "../components/modules/Footer";
import { GoLocation } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Hotel() {
  const location = useLocation();
  const [options, setOptions] = useState(
    location.state.options || { adult: 1, children: 0, room: 1 }
  );
  const [date, setDate] = useState(location.state.date);
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
    let newSlideNumber;
    if (move === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);

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
                <span>{data.address}</span>
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
              <button className="button__reserve">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </>
  );
}

export default Hotel;
