import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom";

const MAX_HEADER_LENGTH = 25;

const RecipeCard = ({ yemekler }) => {
  console.log(yemekler);
  let navigate = useNavigate();
  return (
    <MainContainer>
      {yemekler.map((i) => (
        <Cards key={i.recipe.id}>
        <RecipeHeader>
            {i.recipe.label.length > MAX_HEADER_LENGTH
              ? i.recipe.label.substring(0, MAX_HEADER_LENGTH) + "..."
              : i.recipe.label}
          </RecipeHeader>
          <RecipeImage src={i.recipe.image} />
          <Button
            onClick={() => {
              navigate("/details", { state: { i } });
            }}
          >
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;