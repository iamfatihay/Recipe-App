import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles';
import dietsvg from "../../assets/diet.svg";

const Details = () => {
  const location = useLocation();
  console.log(location.state.i.recipe);
  const a = location.state.i.recipe;

  const [showAllLabels, setShowAllLabels] = useState(false);

  const showMore = () => {
    setShowAllLabels(true);
  };

  const showLess = () => {
    setShowAllLabels(false);
  };

  const healthLabelsToShow = showAllLabels ? a.healthLabels : a.healthLabels.slice(0, 5);

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{a.label}</h1>
        <img src={dietsvg} alt="img" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>Dish type : {" "}{a.dishType}{" "}</p>
          <p>Meal type : {" "}{a.mealType}{" "}</p>
          <p>
            {a.totalNutrients.CHOLE.label} : {" "}
            {Math.round(a.totalNutrients.CHOLE.quantity)}{" "}
            {a.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {a.totalNutrients.ENERC_KCAL.label} : {" "}
            {Math.round(a.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {a.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>Total weight : {Math.round(a.totalWeight)} g</p>
          <a href={a.url} target='_blank' rel="noreferrer" style={{ cursor: "pointer", color:"green", textDecoration:"underline" }}>For more info...</a>
          <h3>Health Labels</h3>
          <div>
            {healthLabelsToShow.map((item, index) => (
              <p key={index}> {index + 1} - {item} </p>
            ))}
            {!showAllLabels && a.healthLabels.length > 5 && (
              <p style={{ cursor: "pointer", color:"red" }} onClick={showMore}>
                Show more...
              </p>
            )}
            {showAllLabels && (
              <p style={{ cursor: "pointer", color:"red" }} onClick={showLess}>
                Show less...
              </p>
            )}
          </div>

        </OtherPart>
        <ImgContainer>
          <img src={a.image} alt="img" />
        </ImgContainer>
        <IngredContainer>
          {a.ingredientLines.map((item, index) => (
            <div key={index}>
              <p>{index + 1} =&gt; {item} </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
