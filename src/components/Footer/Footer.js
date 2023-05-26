"use client"

import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { FooterWrapper, NewsLatterText } from "./styles";
import NewsLatter from "./Newslatter";


const Footer = ({color}) => {


  return (
    <Box id="sg-footerBox" sx={{ width: "100%" }} display="flex" flexDirection="column">
      <FooterWrapper id="sg-footerWrapper">
        <Grid id="sg-footerGrid" container>
          <Grid id="sg-footerGridItem" item xs={6} md={4}>
                <Box id="sg-footerSubBox">
                  <NewsLatterText id="sg-footerNewsLatterText" color={color} >
                    About Us
                  </NewsLatterText>
                  <NewsLatterText id="sg-footerNewsLatterText" color={color} >
                    Contact Us
                  </NewsLatterText>
                  <NewsLatterText id="sg-footerNewsLatterText" color={color} >
                    Privacy Policy
                  </NewsLatterText>
                  <NewsLatterText id="sg-footerNewsLatterText" color={color} >
                    Terms and Conditions
                  </NewsLatterText>
                </Box>
          </Grid>
          
          <Grid id="sg-footerGridItem3"
            item
            xs={12}
            md={4}
            sx={{ marginTop: { xs: "15px", md: "0px" } }}
          >
            <NewsLatterText id="sg-footerNewsLatterText3" color={color}>Social Icons</NewsLatterText>
            <Stack id="sg-footerStack"
              direction="row"
              spacing={"15px"}
              sx={{
                justifyContent: "flex-start",
              }}
            >     
            </Stack>
          </Grid>
          
          <Grid id="sg-footerGridItem4"
            xs={12}
            md={4}
            sx={{
              marginTop: { xs: "25px", md: "0px" },
              paddingBottom: { xs: "50px", md: "0px" },
              paddingLeft: { xs: "0px", md: "50px" },
            }}
          >
            <NewsLatter/>
          </Grid>
        </Grid>
      </FooterWrapper>
    </Box>
  );
};

export default Footer;