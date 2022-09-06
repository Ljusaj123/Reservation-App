import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
import { FiTarget } from "react-icons/fi";

import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import { Reserve } from "../components/Reservation";

import { countDays } from "../utils/countdays";

function Hotel() {
  const { date, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  const { data, error, loading } = useFetch(
    `http://localhost:5500/api/v1/hotels/${id}`
  );

  const { photos, city, address, distance, cheapestPrice, title, desc, name } =
    data;

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleSlider = (i) => {
    setOpen(true);
    setSlideNumber(i);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleMove = (move) => {
    const numberOfPhotos = photos.length - 1;
    let newSlideNumber;
    if (move === "l") {
      newSlideNumber = slideNumber === 0 ? numberOfPhotos : slideNumber - 1;
    }
    if (move === "d") {
      newSlideNumber = slideNumber === numberOfPhotos ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  let days = countDays(date[0].startDate, date[0].endDate);

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
      <Header />
      <div className="hotel">
        <div className="hotel-container container">
          {open && (
            <div className="slider">
              <BsFillArrowLeftCircleFill
                onClick={() => handleMove("l")}
                className="left-arrow-icon icon__popup"
              />
              <BsFillArrowRightCircleFill
                onClick={() => handleMove("d")}
                className="right-arrow-icon icon__popup"
              />
              <IoMdCloseCircle
                onClick={() => setOpen(false)}
                className="close-icon icon__popup"
              />
              <img src={photos[slideNumber]} alt="" className="sliderImg" />
            </div>
          )}

          <div className="hotel__intro">
            <div className="hotel__intro-text">
              <h1 className="hotel__title">{name}</h1>
              <div className="hotel__address">
                <GoLocation className="icon__show" />
                <p>
                  {address}, {city}
                </p>
              </div>
              <div className="hotel__location">
                <FiTarget className="icon__show" />
                <p>{distance} from the center</p>
              </div>
            </div>
            <button className="button__reserve" onClick={handleClick}>
              Reserve or Book Now!
            </button>
          </div>

          <div className="hotel__images">
            {photos &&
              photos.map((photo, index) => {
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
              <h2 className="hotel__text-title">{title}</h2>
              <p className="hotel__desc">{desc}</p>
            </div>
            {days ? (
              <div className="hotel__details-price">
                <h3>Perfect for a {days}-night stay!</h3>
                <p>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </p>
                <h3>
                  <b>${days * cheapestPrice * options.room}</b> ({days} nights)
                </h3>
                <button className="button__reserve" onClick={handleClick}>
                  Reserve or Book Now!
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {openModal && <Reserve setOpenModal={setOpenModal} id={id} />}
      <Email />
      <Footer />
    </>
  );
}

export default Hotel;
