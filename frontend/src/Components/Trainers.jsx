import React from "react";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import image from "../Components/trainer.jpg";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/class/trainers")
      .then((res) => {
        console.log(res.data);
        setTrainers(res.data.trainer);
      })
      .catch((err) => console.log(err));
  }, [trainers]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              // color="textPrimary"
              gutterBottom
              style={{
                color: "black",
                backgroundColor: "#ffcc00",
                fontFamily: "Nunito",
              }}
            >
              OUR TRAINERS
            </Typography>
            {/* <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              style={{ color: "black", backgroundColor: "#ffcc00" }}
            >
              We choose the best trainers you can ever meet. We promise you you
              will have fun and be fit with each one of them. And here we
              introduce you to the best of the best.
            </Typography> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {trainers.map((el, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${el.image}`}
                    title="Image title"
                    style={{
                      height: "100px",
                    }}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      style={{
                        fontFamily: "Nunito",
                        color: "#0099cc",
                        textAlign: "center",
                      }}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Nunito",
                        textAlign: "justify",
                      }}
                    >
                      {el.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
