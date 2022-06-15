import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fun } from "../App";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Home() {
  let sty = {
    textDecoration: "none",
    wordWrap: "break-word",
  };
  console.log("Home-P");
  let f = useContext(Fun);
  function reloadPage() {
    window.location.reload();
  }

  console.log("inside home");
  useEffect(() => {
    console.log("again");
    f();
    console.log("Home-UseEffect");
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: 3,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={2}>
          <Link to="/jobs" style={sty}>
            <Item>
              <strong class="text-white"> Jobs</strong>
            </Item>
          </Link>

          <Link to="/eread" style={sty}>
            <Item>
              <strong class="text-white">Events</strong>
            </Item>
          </Link>

          <Link to="/qas" style={sty}>
            <Item>
              <strong class="text-white">Interview Q/A</strong>
            </Item>
          </Link>

          <Link to="/jobs" style={sty}>
            <Item>
              <strong class="text-white">About us !</strong>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Card>
              {/* sx={{ maxWidth: 345 }} */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="430"
                  image="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
