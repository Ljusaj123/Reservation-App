import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { SearchContext } from "../context/SearchContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getDatesInRange } from "../utils/getDatesInRange";

export const Reservation = ({ setOpenModal, id }) => {
  const navigate = useNavigate();

  const [selectedRooms, setSelectedRooms] = useState([]);
  const { date } = useContext(SearchContext);
  const { data, loading, error } = useFetch(
    `http://localhost:5500/api/v1/hotels/room/${id}`
  );

  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

  // const isAvailable = (roomNumber) => {
  //   console.log(roomNumber);
  //   const isFound = roomNumber.unvailableDates.some((date) =>
  //     allDates.inclludes(new Date(date).getTime())
  //   );

  //   return !isFound;
  // };
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpenModal(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="reservation">
      <div className="reservation__container">
        <IoMdCloseCircle
          onClick={() => setOpenModal(false)}
          className="icon__closeRes"
        />
        <h2>Select your rooms</h2>
        {data.map((item) => {
          const { _id, title, desc, maxPeople, price, roomNumbers } = item;
          return (
            <div className="reservation__item" key={_id}>
              <div className="reservation__item-info">
                <p className="reservation__item-title">{title}</p>
                <span className="reservation__item-desc">{desc}</span>
                <span className="reservation__item-max">
                  Max people: {maxPeople}
                </span>
                <span className="reservation__item-price">{price}$</span>
              </div>
              <div className="reservation__item-selectRooms">
                {roomNumbers.map((roomNumber, index) => {
                  return (
                    <div className="reservation__room" key={index}>
                      <label>{roomNumber.number}</label>
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        // disabled={!isAvailable(roomNumber)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <button onClick={handleClick} className="button__reserve">
          Reserve now!
        </button>
      </div>
    </div>
  );
};
