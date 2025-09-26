import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";

const APP_ID = process.env.REACT_APP_APP_ID || "a658d166";
const APP_KEY = process.env.REACT_APP_APP_KEY || "873bde986100aef8b561fc76713c9a2f";

const Home = () => {
    const [query, setQuery] = useState("");
    const [ögün, setOgun] = useState("Breakfast");
    const [yemekler, setYemekler] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = useCallback(
        async (searchQuery = query) => {
            if (!searchQuery.trim()) {
                console.log("Query is empty");
                return;
            }

            setLoading(true);
            setError(null);

            try {
                // Backend proxy üzerinden API çağrısı
                const url = `http://localhost:5000/api/recipes?q=${encodeURIComponent(searchQuery)}&mealType=${ögün}`;
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setYemekler(data.hits);
                console.log("API Response:", data.hits);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(
                    "Tarifler yüklenirken bir hata oluştu. Lütfen tekrar deneyin."
                );
                setYemekler([]);
            } finally {
                setLoading(false);
            }
        },
        [query, ögün]
    );

    useEffect(() => {
        // Initial load with default query
        const defaultQuery = "chicken";
        setQuery(defaultQuery);
        getData(defaultQuery);
        // eslint-disable-next-line
    }, []);

    // Debounced search effect
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (query && query.length >= 2) {
                getData(query);
            }
        }, 500); // 500ms delay

        return () => clearTimeout(timeoutId);
    }, [query, getData]);

    // Effect for meal type changes
    useEffect(() => {
        if (query && query.length >= 2) {
            getData(query);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ögün]);

    console.log(yemekler);

    return (
        <div>
            <Header
                setQuery={setQuery}
                setOgun={setOgun}
                getData={() => getData(query)}
            />

            {loading && (
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <p>Tarifler yükleniyor...</p>
                </div>
            )}

            {error && (
                <div
                    style={{
                        textAlign: "center",
                        padding: "20px",
                        color: "red",
                    }}
                >
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && yemekler.length > 0 ? (
                <div>
                    <RecipeCard yemekler={yemekler} />
                </div>
            ) : !loading && !error ? (
                <ImgDiv>
                    <HomeImg src={homeSvg} />
                </ImgDiv>
            ) : null}
        </div>
    );
};

export default Home;
