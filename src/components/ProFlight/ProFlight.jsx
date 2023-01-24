import React from "react";
import ProFlightPng from "../../assets/ProFlight.png";
import classes from "./ProFlight.module.css";

const ProFlight = ({ active }) => {
  return (
    <div
      className={
        active ? classes.containerProFlight : classes.containerProFlightDisabled
      }
    >
      <img src={ProFlightPng} alt="ProFlight" />
    </div>
  );
};

export default ProFlight;
