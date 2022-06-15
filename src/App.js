import axios from "axios";
import React, { createContext, useEffect } from "react";
import Routing from "./Routing";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import QA from "./components/qa/QA";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const DataContext = createContext();
export const Fun = createContext();
function App() {
  // document.body.style = "background:#004d40";
  // #001E3C
  // document.body.style = "background:#001E3C";
  console.log("APP");
  let [arrayL, setArrayList] = React.useState([]);
  function readData() {
    console.log("Read data-axios-APP");
    axios
      .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
      // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
      // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
      .then((res) => setArrayList(res.data))
      .catch(() => {
        console.log("err");
        setTimeout(() => {
          console.log("Time-out");
          // window.location.reload();
        }, 1500);
      });
  }

  useEffect(() => {
    console.log("Use-Eff-APP");
    readData();
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <DataContext.Provider value={arrayL}>
          <Fun.Provider value={readData}>
            <Routing />
            {/* <BottomAppBar /> */}
            {/* <SimpleBackdrop /> */}
            {/* <QA /> */}

            {/* <AlertDialog /> */}
            {/* <ResponsiveAppBar /> */}
          </Fun.Provider>
        </DataContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
