import React from "react";
import Appbar from "../Components/AppBar/Appbar";
import { Box, Grid, Typography } from "@mui/material";
import IconCta from "../Elements/Cta/IconButton";
import AppIcons from "../Configs/Icons";
import { useNavigate } from 'react-router-dom';
import BasicList from "../Components/Lists/List";
import { useSelector } from "react-redux";
import BasicCta from "../Elements/Cta/BasicCta";

export default function Cart() {
  const navigator = useNavigate();
  const { items = [], cartTotal = 0 } = useSelector((store) => store.cart);
  const { userId = '' } = useSelector((store) => store.authentication);

  const handleOrder = () => {
    fetch(`http://localhost:3003/orders/create/`, {
      method: "POST",
      body: JSON.stringify({
        user: userId,
        products: items,
        orderValue: cartTotal,
        isPaid: false,
        paymentMode: "COD"
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    }).catch((error) => console.log(error))
  }

  return (
    <Box>
            <Appbar
                prefix={<IconCta onClick={() => navigator(-1)} Icon={AppIcons.back} />}
                content={
                <Typography variant="h6" fontWeight={"700"}>
                  Cart
                  </Typography>
                }
            />
            <Box>
          <BasicList data={items} />
          <Grid container spacing={2} sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            border: '1px dashed grey',
            background: "#FFFFFF" 
          }}>
            <Grid item xs={6} sx={{ p: 2 }}>
              <Typography sx={{
                textAlign: 'start',
                marginLeft: 2
              }}>Total</Typography>
              <Typography sx={{
                textAlign: 'start',
                marginLeft: 2
              }} variant="h5">{cartTotal}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <BasicCta
                label="Place Order"
                id=""
                overrides={{
                  height: "50px",
                }}
                fullWidth
                handleClick={handleOrder}
            />
            </Grid>
        </Grid>
        </Box>
  </Box>
  )
}
