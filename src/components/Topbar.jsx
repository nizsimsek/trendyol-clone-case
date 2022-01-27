import React from "react";
import { Grid, Button, Avatar, Link } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";
import "../Global.css";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "none",
  color: "black",
  "&:hover": {
    color: orange[700],
    backgroundColor: grey[100],
  },
}));
const Topbar = () => {
  return (
    <>
      <Grid container className="topbar-container">
        <Grid item xs={2}>
          <Link href="/">
            <Avatar
              src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg"
              sx={{ width: "150px", height: "auto", borderRadius: "0px" }}
            />
          </Link>
        </Grid>
        <Grid item xs={6} px={3}>
          <SearchBar />
        </Grid>
        <Grid item xs={4}>
          <ColorButton>
            <PersonOutlineOutlinedIcon />
            Giriş Yap
          </ColorButton>
          <ColorButton>
            <FavoriteBorderOutlinedIcon />
            Favorilerim
          </ColorButton>
          <ColorButton>
            <ShoppingCartOutlinedIcon />
            Sepetim
          </ColorButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Topbar;
