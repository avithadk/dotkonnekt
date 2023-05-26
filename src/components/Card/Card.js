import React from "react";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import {
  BoxContainer,
  ProdCard,
  AddtoButton,
  PriceText,
  CardMediaContainer,
} from "./styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import StarRating from "./StarRating";
import Cardimg from "../../../public/forgotImg3.png";
import Image from "next/image";

const ProductCard = ({ backgroundColor }) => {
  return (
    <Grid container spacing={2} id="sg-productCardGrid">
      <Grid item xs={12} md={12} id="sg-productCardSubGrid">
        <BoxContainer
          id="sg-productCardBoxContainer"
          backgroundColor={backgroundColor}
        >
          <ProdCard
            id="sg-productCardProdCard"
            sx={{ padding: { xs: "8px", md: "16px", cursor: "pointer" } }}
          >
            <CardMediaContainer id="sg-productCardMediaContainer">
              <Image
                id="sg-headerLogoImg"
                src={Cardimg}
                width={"200"}
                height={"400"}
                alt=""
              />
            </CardMediaContainer>

            <CardContent
              id="sg-productCardContent"
              sx={{
                padding: "0",
                ":last-child": { padding: "0" },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ margin: "0" }}
                id="sg-productCardStack"
              >
                <StarRating id="sg-productCardStarRating" />

                <Typography
                  id="sg-productCardQuickView"
                  component="div"
                  variant="span"
                  sx={{
                    color: "#5ECE7B",
                    fontWeight: "700",
                    fontSize: "16px",
                    position: "absolute",
                    right: "4%",
                    top: "3%",
                  }}
                ></Typography>
              </Stack>

              <Stack
                id="sg-productCardStack"
                direction="row"
                spacing={2}
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-end"
              >
                <PriceText id="sg-productCardPriceText">$35</PriceText>
              </Stack>

              <AddtoButton
                id="sg-productCardAddtoCartMobileButton"
                variant="text"
              >
                Add to Cart
              </AddtoButton>
            </CardContent>
          </ProdCard>
        </BoxContainer>
      </Grid>
    </Grid>
  );
};
export default ProductCard;
