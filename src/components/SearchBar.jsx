import * as React from "react";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/item";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function SearchBar() {
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    dispatch(itemActions.filterItemName(event.target.value));
  };

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl variant="standard">
          <Input
            id="input-with-icon-adornment"
            onChange={searchHandler}
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{
              width: 500,
              height: 50,
            }}
          />
        </FormControl>
      </Box>
    </>
  );
}
