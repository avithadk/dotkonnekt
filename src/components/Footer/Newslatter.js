import React from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@mui/material";

import { NewsLatterText } from "./styles";


const NewsLatter = () => {
 

  return (
    <Box id="sg-newsLatterBox">
      
          <NewsLatterText id="sg-newsLatterText">Subscribe to our Newsletter</NewsLatterText>

      <FormControl id="sg-newsLatterFormControl"
        sx={{
          backgroundColor: "#363942",
          width: { xs: "100%", md: "100%" },
        }}
      >
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          placeholder="Email Address"
          sx={{ color: "#FFFFFF" }}
          
          endAdornment={
            <InputAdornment id="sg-newsLatterInputAdornment" position="end">
              <Typography id="sg-newsLatterTypography"
                variant="span"
                sx={{
                  backgroundColor: "#5ECE7B",
                  height: "45px",
                  width: "50px",
                  mr: "-10px",
                  color: "#44B761",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
              >
              </Typography>
            </InputAdornment>
          }
        />
      </FormControl>
      <Typography id="sg-newsLatterTypography2"
        sx={{
          fontSize: "8px",
          lineHeight: "12px",
          color: "#8D8F9A",
          fontWeight: "500",
          marginTop: "5px",
        }}
      >
        By clicking submit you agree to receive emails from Dotbeauty and accept
        our web terms of use and privacy and cookie policy
        <Typography id="sg-newsLatterTypography3"
          variant="span"
          sx={{
            fontSize: "8px",
            lineHeight: "12px",
            color: "#8D8F9A",
            fontWeight: "500",
            marginTop: "5px",
            textDecoration: "underline",
          }}
        >
          * Terms & conditions apply.
        </Typography>
      </Typography>
    </Box>
  );
};

export default NewsLatter;