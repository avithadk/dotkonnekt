import React from "react";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import {
  StarRatingWrapper,
  StyledRating,
} from "./styles";


const StarRating = () => {
  

  return (
    <StarRatingWrapper id="sg-starRatingWrapper">
      <StyledRating id="sg-styledRating"
        name="star-rating"
        precision={0.5}
        emptyIcon={<StarTwoToneIcon fontSize="inherit" />}
      />
    </StarRatingWrapper>
  );
};

export default StarRating;
