import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";

const Header = ({ setQuery, setOgun, getData }) => {

  const yapSubmit = (e) => {
    e.preventDefault();
    // Form submit edildiğinde getData çağrılacak
    // Bu fonksiyon Home bileşeninden geliyor
  };

  return (
    <HeaderContainer>
      <MainHeader>RECIPE APP</MainHeader>
      <FormContainer onSubmit={yapSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>

        <Select
          name="ögünTypes"
          id="ögünTypes"
          onChange={(e) => setOgun(e.target.value)}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>TeaTime</option>
          <option>Dinner</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;