import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlik ve 3 arama kutusunu taşiyan kutu TURUNCU */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #00adb5; */
  background: orange;
`;

export const MainHeader = styled.h2`
  /* food app başlik */
  margin-top: 1rem;
  letter-spacing:8px;
  font-family: "Girassol", sans-serif;
  padding: 0 1rem;
  font-size: 3rem;
  background-color: yellow;
`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandiği kutu  MAVİ*/
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* ekran küçülünce sikişmasinlar,alta geçsinler */
  justify-content: center;
  /* border: 2px solid white; */
  border-radius: 5px;
  margin: 9px 20px;
  background-color:blue;
`;

export const FoodInput = styled.input`
  /* arama yapilacak ürünün yazildiği input AÇIK MAVİ İNPUT*/
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  text-indent: 10px;
  /* yazi 10px içten başlasin */
  margin: 5px;
  font-size: 1.8rem;
  background-color: lightblue;
`;

export const Button = styled.button`
  /* search butonu GRİ*/
  /* background-color: #e1f1dd; */
  background-color: lightgray;

  padding: 0px 10px;
  /* outline: none; */
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.8rem;
  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in-out;
    border: 1px solid white;
  }
`;

export const Select = styled.select`
  /* breakfast yazan select */
  background-color: pink;

  border-radius: 3px;
  margin: 5px;
  padding: 0px 10px;
  height: 3rem;
  border: none;
  font-size: 1.8rem;

  
  
`;
