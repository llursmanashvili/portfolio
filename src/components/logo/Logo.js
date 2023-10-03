import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg"
      viewBox="-35 -10 220 220"
      className={classes.svgHover}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_5" data-name="Layer 5">
          <rect
            className="cls-1"
            x="10.47"
            y="32.33"
            width="15"
            height="160.85"
            rx="3.75"
          />

          <rect
            className="cls-1"
            x="181.62"
            y="-148.1"
            width="11"
            height="130.08"
            rx="2.75"
            transform="rotate(90)"
          />
        </g>
      </g>
    </svg>
  );
};
