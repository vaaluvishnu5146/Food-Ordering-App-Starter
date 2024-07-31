import React from "react";
import Appbar from "../Components/AppBar/Appbar";
import { Box, Typography } from "@mui/material";
import IconCta from "../Elements/Cta/IconButton";
import AppIcons from "../Configs/Icons";
import { useNavigate } from 'react-router-dom';
import BasicList from "../Components/Lists/List";
import { useSelector } from "react-redux";

export default function Cart() {
  const navigator = useNavigate();
  const { items = [] } = useSelector((store) => store.cart);
  return  <Box>
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
        </Box>
  </Box>
}
