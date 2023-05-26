import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";


const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: "30px 15% 30px",
  backgroundColor: "#43464E",
  [theme?.breakpoints?.down("sm")]: {
    padding: "32px 5%", 
  },
  [theme?.breakpoints?.up("sm")]: {
    padding: "32px 5%",   
  },

  [theme?.breakpoints?.up("md")]: {
    padding: "80px 4% 80px",
    height:"318px",
  },
  [theme?.breakpoints?.up("lg")]: {
    padding: "80px 10% 80px",
    height:"318px",
  },
}));
const NewsLatterText = styled(Typography)(({color}) => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "1px",
  color: color ? color : "#FFFFFF",
  paddingBottom: "12px",
  cursor: "pointer",
}));

export {
  FooterWrapper,
  NewsLatterText,
};
