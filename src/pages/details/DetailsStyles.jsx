import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: pink;
  @media (max-width: 1250px) {
    justify-content: center;
    border: 1px solid red;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color: green;
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items:center;
  gap:2rem;
  margin: 25px;
  h1 {
    font-size: 2.4rem;
  }
  img {
    width: 200px;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  padding:0px 5px;
  font-size: 1.2rem;
  margin: 2rem;
  background-color: gray;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  background-color: lightgray;
  padding:0px 5px;
  width: 400px;
  text-align: center;
  font-size: 1.6rem;
  margin: 2rem;
  h3{
    color:red;
    font-weight:bold
  }
`;
