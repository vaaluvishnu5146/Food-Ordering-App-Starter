import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardCarouselSlider({ data = [] }) {
  const navigator = useNavigate();
  return (
    <Box className="carousel-slider">
      <Typography variant="h5" className="heading">
        Trending Restaurants
      </Typography>
      <Box className="card-slider-container">
        {data &&
          data.length > 0 &&
          data.map((_d, i) => (
            <Box key={`card-${i}`} className="card-wrapper" onClick={() => {
              navigator(`/restaurant/${_d._id}`)
            }}>
              <Box
                className="card"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80')`,
                }}
              >
                <Box className="overlay"></Box>
                <Box className="card-content">
                  <Box className="card-header">
                    <Chip
                      label={_d.cuisine}
                      variant="outlined"
                      onClick={() => {}}
                      sx={{
                        color: "#FFFFFF",
                        height: "20px",
                      }}
                    />
                  </Box>
                  <Box className="card-body">
                    <Typography
                      variant="h6"
                      color={"white"}
                      textAlign={"start"}
                    >
                      {_d.name}
                    </Typography>
                    <Typography variant="caption" color={"white"}>
                      HSR LAYOUT
                    </Typography>
                  </Box>
                  <Box className="card-footer"></Box>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
