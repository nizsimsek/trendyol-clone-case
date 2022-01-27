import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { grey, yellow, orange } from "@mui/material/colors";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const ItemDetail = (props) => {
  const item = props.item;
  return (
    <>
      <Card
        sx={{
          width: 280,
          height: 400,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "primary.secondary",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          image={item.imageUrl}
          alt="HDD"
          sx={{
            padding: "0 10px",
            height: 210,
            width: 200,
          }}
        />
        <CardContent sx={{ padding: "5px" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            {item.brandName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              padding: "5px",
              height: "50px",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="span"
            sx={{
              display: "flex",
              float: "right",
              height: "30px",
              color: grey[500],
            }}
          >
            <StarOutlinedIcon sx={{ color: yellow[500], fontSize: "large" }} />
            <StarOutlinedIcon sx={{ color: yellow[500], fontSize: "large" }} />
            <StarOutlinedIcon sx={{ color: yellow[500], fontSize: "large" }} />
            <StarOutlinedIcon sx={{ color: yellow[500], fontSize: "large" }} />
            <StarOutlinedIcon sx={{ color: grey[500], fontSize: "large" }} />
            <Box sx={{ fontSize: "large" }}>({item.commentCount})</Box>
          </Typography>
          <Typography
            gutterBottom
            variant="span"
            component="div"
            sx={{
              color: "orange",
              fontSize: 22,
              fontWeight: "bold",
              paddingLeft: "5px",
              height: "30px",
            }}
          >
            {item.price} TL
          </Typography>
          <Typography>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                color: orange[800],
                border: "1px solid",
                borderColor: orange[800],
                "&:hover": {
                  border: "1px solid",
                  borderColor: orange[800],
                  backgroundColor: orange[800],
                  color: "white",
                },
              }}
            >
              Sepete Ekle
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetail;
