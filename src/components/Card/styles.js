import styled from "@emotion/styled";
import { Typography, Box, Button, Card, CardMedia, Rating } from "@mui/material";


export const BoxContainer = styled(Box)(({backgroundColor}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop:"40px",
  marginBottom:"40px",
  backgroundColor: backgroundColor ? backgroundColor : "#ffffff"
}));

export const ProdCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "white",
  position: "relative",
  borderRadius: "0px !important",
  
  [theme?.breakpoints?.down("md")]: {
    width: "100%",
    height: "192px",
    gap: "16px",
  },
  [theme?.breakpoints?.up("md")]: {
    width: "498px",
    height: "312px",
    gap: "24px",
  },
}));

export const PriceText = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "29px",
  textAlign: "left",
  marginLeft:"15px",
  marginTop: "10px",
}));

export const CardMediaContainer = styled(CardMedia)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme?.breakpoints?.down("md")]: {
    width: "159px",
    height: "176px",
  },
  [theme?.breakpoints?.up("md")]: {
    width: "190px",
    height: "280px",
  },
}));

export const AddtoButton = styled(Button)(() => ({
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16px",
  color: "#5ECE7B",
  textDecoration: "underline",
  marginLeft:"10px",
  position: "absolute",
  bottom: "8px",
}));

export const StarRatingWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    marginLeft:"10px",
}));
  
export const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#5ECE7B",
    },
    "& .MuiRating-iconHover": {
      color: "#5ECE7B",
    },
});
  
 