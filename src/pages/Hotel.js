import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { Header } from "../components/modules/Header";
import { Footer } from "../components/modules/Footer";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import { Reservation } from "../components/Reservation";

import { GoLocation } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { FaUmbrellaBeach, FaTaxi } from "react-icons/fa";
import { MdLocalParking, MdPool, MdHotTub, MdBalcony } from "react-icons/md";

import { countDays } from "../utils/countdays";
import { HalfMalf } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

function Hotel() {
  const { date, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  const { data, error, loading } = useFetch(
    `http://localhost:5500/api/v1/hotels/${id}`
  );

  const {
    name,
    city,
    photos,
    address,
    distanceFromCenter,
    distanceFromBeach,
    cheapestPrice,
    desc,
    freeParking,
    freeWifi,
    balcony,
    pool,
    jacuzzi,
    freeAirportTaxi,
  } = data;

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
    return <HalfMalf text={"Loading..."} width={"250px"} height={"250px"} />;
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
                <p>
                  <GoLocation className="icon__show" />
                  {address}, {city}
                </p>
              </div>
              <div className="hotel__location">
                {distanceFromCenter && (
                  <p>
                    <FiTarget className="icon__show" />
                    {distanceFromCenter} from the center
                  </p>
                )}
                {distanceFromBeach && (
                  <p>
                    <FaUmbrellaBeach className="icon__show" />
                    {distanceFromCenter} from the beach
                  </p>
                )}
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

          <div className="features container">
            {freeParking && (
              <div className="features-container">
                <MdLocalParking className="icon__feature" />{" "}
                <span>Free Parking</span>
              </div>
            )}
            {freeAirportTaxi && (
              <div className="features-container">
                <FaTaxi className="icon__feature" />
                <span>Free Taxi to Airport</span>
              </div>
            )}{" "}
            {freeWifi && (
              <div className="features-container">
                <AiOutlineWifi className="icon__feature" />{" "}
                <span>Free Wifi</span>
              </div>
            )}
            {jacuzzi && (
              <div className="features-container">
                <MdHotTub className="icon__feature" /> <span>jacuzzi</span>
              </div>
            )}
            {pool && (
              <div className="features-container">
                <MdPool className="icon__feature" /> <span>Pool</span>
              </div>
            )}{" "}
            {balcony && (
              <div className="features-container">
                <MdBalcony className="icon__feature" /> <span>Balcony</span>
              </div>
            )}
          </div>
          <div className="hotel__details">
            <div className="hotel__text">
              <h3>About Us:</h3>
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

      {openModal && <Reservation setOpenModal={setOpenModal} id={id} />}
      <Footer />
    </>
  );
}

export default Hotel;
