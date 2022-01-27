import {
  Checkbox,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import "../Global.css";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "none",
  color: "black",
  "&:hover": {
    color: orange[700],
    backgroundColor: "none",
  },
}));

const Sidebar = () => {
  const prices = [
    { id: 1, name: "0TL - 500TL", min: 0, max: 500 },
    { id: 2, name: "500TL - 1000TL", min: 500, max: 1000 },
    { id: 3, name: "1000TL - 2000TL", min: 1000, max: 2000 },
    { id: 4, name: "2000TL - 5000TL", min: 2000, max: 5000 },
    { id: 5, name: "5000TL - 10000TL", min: 5000, max: 10000 },
    { id: 6, name: "10000TL - 50000TL", min: 10000, max: 50000 },
    { id: 7, name: "50000TL - 90000TL", min: 50000, max: 90000 },
  ];

  let filteredId = 0;

  const categories = useSelector((state) => state.categories.categories);
  const brandNames = useSelector((state) => state.item.brands);
  const dispatch = useDispatch();

  const handleChange = (brandName) => {
    dispatch(itemActions.filterBrandName(brandName));
  };

  const categoryHandler = (id) => {
    dispatch(itemActions.dataFilter({ prop: "categoryId", val: id }));
    filteredId = id;
  };

  const searchHandler = (event) => {
    dispatch(itemActions.filterBrandName(event.target.value));
  };

  const priceHandler = (event) => {
    const id = event.target.value;
    switch (id) {
      case "1":
        dispatch(itemActions.filterPrice({ min: 0, max: 500 }));
        break;
      case "2":
        dispatch(itemActions.filterPrice({ min: 500, max: 1000 }));
        break;
      case "3":
        dispatch(itemActions.filterPrice({ min: 1000, max: 2000 }));
        break;
      case "4":
        dispatch(itemActions.filterPrice({ min: 2000, max: 5000 }));
        break;
      case "5":
        dispatch(itemActions.filterPrice({ min: 5000, max: 10000 }));
        break;
      case "6":
        dispatch(itemActions.filterPrice({ min: 10000, max: 50000 }));
        break;
      case "7":
        dispatch(itemActions.filterPrice({ min: 500000, max: 900000 }));
        break;
      default:
    }
  };

  return (
    <>
      <Grid container py={3}>
        <FormLabel sx={{ fontSize: "22px" }}>Kategoriler</FormLabel>
        {categories.map((category, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              height: "30px",
              lineHeight: "30px",
            }}
          >
            <Button
              sx={{
                id: category.id,
                fontSize: "14px",
                textDecoration: "none",
                color: "black",
                "&:hover": {
                  color: orange[700],
                },
              }}
              onClick={() => categoryHandler(category.id)}
            >
              {category.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "22px",
            }}
          >
            Marka
          </FormLabel>
          <TextField
            id="combo-box-demo"
            options={brandNames}
            size="small"
            placeholder="Marka Ara"
            sx={{ width: 175 }}
            onChange={searchHandler}
          />
          <FormControl>
            {brandNames.map((item, index) => (
              <Grid item xs={12} key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => handleChange(item)}
                      sx={{
                        "&.Mui-checked": {
                          color: orange[700],
                        },
                      }}
                    />
                  }
                  label={<span style={{ fontSize: "14px" }}>{item}</span>}
                />
              </Grid>
            ))}
          </FormControl>
        </FormControl>
      </Grid>

      <Grid container py={5}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "22px",
              }}
            >
              Fiyat
            </FormLabel>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                placeholder="En Az"
                min="0"
                max="99999"
                size="small"
                sx={{
                  margin: "10px 3px 10px 0",
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="En Çok"
                size="small"
                min="1"
                max="100000"
                sx={{
                  margin: "10px 0",
                }}
              />
              <ColorButton onClick={priceHandler}>
                <SearchIcon sx={{ fontSize: "20px" }} />
              </ColorButton>
            </Box>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={priceHandler}
            >
              <FormControl>
                {prices.map((price, index) => (
                  <Grid item xs={12} key={index}>
                    <FormControlLabel
                      value={index + 1}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: orange[700],
                            },
                          }}
                        />
                      }
                      label={
                        <span style={{ fontSize: "14px" }}>{price.name}</span>
                      }
                    />
                  </Grid>
                ))}
              </FormControl>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Sidebar;
