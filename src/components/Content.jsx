import React from "react";
import { Grid, Typography, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import ItemDetail from "./ItemDetail";

const Content = () => {
  const data = useSelector((state) => state.item.items);
  const filteredData = useSelector((state) => state.item.filteredItems);

  if (!data) {
    return <p>Undefined</p>;
  }

  return (
    <>
      <Typography variant="h6" pb={2}>
        Bilgisayar kategorisine ait ürünler
      </Typography>
      <Grid container>
        {filteredData.length === 0 && (
          <Grid item xs={12}>
            <Alert severity="info">Ürün bulunamadı</Alert>
          </Grid>
        )}
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
            <Grid item xs={3} key={index} pb={2}>
              <ItemDetail item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Content;
