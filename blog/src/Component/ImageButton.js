import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url:
      "https://images.thrillophilia.com/image/upload/s--0UwsGUzn--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/006/013/original/1488289500_Scuba-Diving-Goa_1446210558.jpg.jpg?1488289500",
    title: "Breakfast",
    width: "40%",
  },
  {
    url: "http://www.sunriseholidays.in/india/andaman/andaman-big.jpg",
    title: "Burgers",
    width: "30%",
  },
  {
    url:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/scuba.jpg",
    title: "Camera",
    width: "30%",
  },
  {
    url:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/scuba.jpg",
    title: "Room",
    width: "40%",
  },
  {
    url:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/scuba.jpg",
    title: "Room",
    width: "30%",
  },
  {
    url:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/scuba.jpg",
    title: "Room",
    width: "30%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  function imgClicked() {
    console.log("hi");
  }

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={imgClicked}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
