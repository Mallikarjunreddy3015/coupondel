import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import MCard from "./Card";
import Amazon from "../../images/amazon.png";
import Link from "@mui/material/Link";
const carddata = {
  img: `${Amazon}`,
  details:
    "Lorem ipsum dolor sit a fugiat ratione delectus illum necessitatibus molestias, doloribus ipsum! Animi, alias.",
  discount: "8%",
  source : "https://amzn.to/3euaBTI"
};
const allcards = [
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
  carddata,
];

const Affiliates = () => {
  const [data, setData] = useState([]);
  const cardList = allcards.map((curr, index) => {
    return (
      <MCard
        key={index}
        img={carddata.img}
        details={carddata.details}
        discount={carddata.discount}
        source ={carddata.source}
      ></MCard>
    );
  });
  return (
    <> 
     
      <Container sx={{ display: "flex", flexWrap: "wrap", mt: 11, mb: 10 }}>
       <h1>All Stores </h1>
        {cardList}
      </Container>
    </>
  );
};

export default Affiliates;
