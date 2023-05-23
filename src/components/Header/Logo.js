import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo192.png";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Box
          id="sg-headerLogoImgWrapper"
          sx={{
            position: "relative",
            height: { xs: "34px", md: "45px" },
            width: { xs: "85px", md: "148px" },
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Image id="sg-headerLogoImg" src={logo} alt="logo" layout="fill" />
        </Box>
      </Link>
    </>
  );
};

export default Logo;
