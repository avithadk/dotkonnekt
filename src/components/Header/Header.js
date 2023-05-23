import React from "react";
import { Box, Toolbar } from "@mui/material";
import { CustomAppBar, MainContainer } from "./styles";
import Logo from "./Logo";

const Header = ({ background }) => {
  return (
    <CustomAppBar
      id="sg-headerCustomAppBar"
      background={background}
      position="static"
    >
      <MainContainer id="sg-headerMainContainer" maxWidth={false}>
        <Toolbar
          id="sg-headerToolbar"
          disableGutters
          sx={{
            justifyContent: { xs: "unset", md: "space-between" },
            minHeight: { xs: "60px", md: "62px" },
          }}
        >
          <Logo id="sg-headerLogo" />
          <Box
            id="sg-headerSearchWrapper"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end", md: "unset" },
              height: { xs: "38px", md: "48px" },
            }}
          ></Box>
        </Toolbar>
      </MainContainer>
    </CustomAppBar>
  );
};
export default Header;
