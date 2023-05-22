import styled from "@emotion/styled";
import {
  AppBar,
  Container,
} from "@mui/material";

const CustomAppbar = styled((props) => {
   return <AppBar {...props} />;
  })(({ background }) => ({
    //  backgroundColor : properties?.CustomAppbar?.backgroundColor ? properties?.CustomAppbar?.backgroundColor : "#ffffff"
    backgroundColor : background? background : "#ffffff"
  }));

const MainContainer = styled(Container)(({ theme }) => ({
  "&.MuiContainer-root": {
    maxWidth: "1270px",
    padding: "0px 8% 0px",
    [theme?.breakpoints?.down("md")]: {
      padding: "0px 2%",
    },
    [theme?.breakpoints?.up("md")]: {
      padding: "0px 4% 0px",
    },
    [theme?.breakpoints?.up("lg")]: {
      padding: "0px 6% 0px",
    },
    [theme?.breakpoints?.between(1440, 1921)]: {
      padding: "0px",
    },
  },
}));

export {
  CustomAppbar,
  MainContainer,
};