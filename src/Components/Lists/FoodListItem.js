import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import AppIcons from "../../Configs/Icons";
import RatingC from "../../Elements/Rating/RatingC";

export default function FoodListItem({ data = {}, onClick = () => {} }) {
  return (
    <ListItem disablePadding className="list-item" onClick={() => onClick(data)}>
      <ListItemButton className="list-item-button">
        <Box
          className="list-body"
          sx={{
            display: "flex",
            height: "auto",
            alignItems: "center",
          }}
        >
          <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Ffood-icon-png%2Ffood-icon-png-13.jpg&f=1&nofb=1&ipt=284993ee1826aa07afc83ae0193c0278cc3e44d15320a9c31e45f049c8974e02&ipo=images'} alt="food" />
          <Box className="list-body-content">
            <Typography variant="body" fontWeight={600}>
              {data.name}
            </Typography>
            <Typography variant="subtitle2">{data.description}</Typography>
            <RatingC readOnly value={data?.generalDetails?.averageRating || 3} />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {data.price}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {data.price}
              </Typography>
            </Box>
          </Box>
          <ListItemIcon>
            <AppIcons.RightArrow fontSize="large" />
          </ListItemIcon>
        </Box>
      </ListItemButton>
    </ListItem>
  );
}
