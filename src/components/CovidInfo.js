import React, { useEffect, useState } from "react";
import "./CovidInfo.css";
import axios from "axios";
import CovidCard from "./CovidCard";
import SelectCountry from "./SelectCountry";

const CovidInfo = () => {
  const [countryData, setcountryData] = useState("");
  const [country, setCountry] = useState("india");
  const countryHandler = (data) => {
    setCountry(data);
  };
  //code for fetching data from api using AXIOS
  const getData = async (country) => {
    try {
      const { data } = await axios.get(
        `https://covid-19.dataflowkit.com/v1/${country}`
      );
      setcountryData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(country);
  }, [country]);

  return (
    <>
      <h1 className="heading"> 📈💉 covid-19 live tracker</h1>
      <SelectCountry countrySelectHandler={countryHandler} />
      <ul>
        <li>
          <CovidCard data={countryData} />
        </li>
      </ul>
    </>
  );
};

export default CovidInfo;
