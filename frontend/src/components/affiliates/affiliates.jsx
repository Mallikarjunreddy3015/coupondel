import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import MCard from "./Card";
import Amazon from "../../images/amazon.png";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
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
    <Box sx = {{mt : 15, textAlign:"center"}}><h1>All Stores </h1></Box>
     
      <Container sx={{  mt : 5 , display: "flex", flexWrap: "wrap", mb: 10 }}>

       
        {cardList}

      </Container>

    </>
  );
};

export default Affiliates;
