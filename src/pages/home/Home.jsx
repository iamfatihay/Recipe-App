import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { useEffect } from "react";

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const Home = () => {
  const [query, setQuery] = useState("");
  const [ögün, setOgun] = useState("Breakfast");
  const [yemekler, setYemekler] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    try {
      if (!query.trim()) {
        console.log("Query is empty, using default search");
        return;
      }
      const veri = await axios.get(url);
      setYemekler(veri.data.hits);
      console.log(veri.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Initial load with default query
    const defaultQuery = "chicken";
    setQuery(defaultQuery);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (query) {
      getData();
    }
    // eslint-disable-next-line
  }, [query, ögün])

  console.log(yemekler);

  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />
      {yemekler.length > 0 ? (
        <div>
          {/* {yemekler.map((i,index) => ( */}
          <RecipeCard yemekler={yemekler} />
          {/* ))} */}
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;