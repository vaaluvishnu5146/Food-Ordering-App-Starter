import * as React from "react";
import List from "@mui/material/List";
import FoodListItem from "./FoodListItem";

export default function BasicList({ data = [], id = "", onListItemClick = () => {} }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} aria-label={id}>
      {data && data.length > 0 ? (
        data.map(
          (data, index) =>
            <FoodListItem key={`${id}-${index}`} data={data} onClick={onListItemClick} />
        )
      ) : (
        <p>No data found</p>
      )}
    </List>
  );
}
