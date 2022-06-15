import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import CssBaseline from "@mui/material/CssBaseline";

function JobList() {
  console.log("JobsList");
  let rD = useContext(DataContext);

  let arrayList = rD;
  function reloadPage() {
    window.location.reload();
  }
  // function downloadData() {
  //   console.log("downloadData");
  //   (function readData() {
  //     axios
  //       .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
  //       // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
  //       // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
  //       .then((res) => setArrayList(res.data));
  //   })();
  // }
  // downloadData();

  useEffect(() => {
    console.log("Use-Effect-JobsList");
    // (function readData() {
    //   console.log("axios");
    //   axios
    //     .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
    //     // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
    //     // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
    //     .then((res) => setArrayList(res.data))
    //     .catch(() => {
    //       console.log("err");
    //       setTimeout(() => {
    //         console.log("Time-out");
    //         window.location.reload();
    //       }, 1500);
    //     });
    // })();
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        class="container border mt-1 rounded "
        style={{ border: "1px solid green", backgroundColor: "#dff5e6" }}
      >
        {/* <Link to="/">
          <button class="btn btn-info mt-3 shadow-lg ">
            <strong class="text-white">Home</strong>
          </button>
        </Link> */}
        {/* <button
          onClick={reloadPage}
          class="btn btn-danger mt-3 ml-3 shadow-lg "
        >
          <strong class="text-white">Reload</strong>
        </button> */}
        <table
          class="table mt-3 align-middle table-striped table-borderless border table-hover"
          style={{ tableLayout: "fixed" }}
        >
          <tbody>
            {arrayList.map((data, ind) => {
              return (
                <tr key={ind}>
                  <td>
                    <Link
                      style={{
                        textDecoration: "none",
                        textShadow: "0px 1px #ed9a09",
                        color: "#7a4905",
                      }}
                      to={{
                        pathname: "/read",
                        state: {
                          name: data.company,
                          req: data,
                          link:
                            data.regLink !== undefined ? data.regLink : "Not",
                          // data.regLink !== undefined ? data.regLink : "Not",
                        },
                      }}
                    >
                      {/* <button class="btn btn-secondary mb-1 "> */}
                      <strong
                        style={{
                          wordWrap: "break-word",
                        }}
                      >
                        {data.company}
                      </strong>
                      {/* </button> */}
                      {/* <span>{data}</span> */}
                    </Link>
                  </td>
                  <td
                    style={{
                      wordWrap: "break-word",
                    }}
                  >
                    {/* <em>
                      {data.Link_valid_till !== undefined ? (
                        //data.Link_valid_till
                        <em
                          style={{
                            color: "#eb4d4d",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar3-event"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                            <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                          </svg>{" "}
                          {data.Link_valid_till}
                        </em>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#06c465"
                          class="bi bi-calendar2-x-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z" />
                        </svg>
                      )}
                    </em> */}
                    <em>
                      {data.Position !== undefined ? (
                        //data.Link_valid_till
                        <h6
                          style={{
                            color: "black",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="16"
                            fill="#06c465"
                            class="bi bi-person-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                          {data.Position}
                        </h6>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="11"
                          fill="currentColor"
                          class="bi bi-align-end"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
                        </svg>
                      )}
                    </em>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default JobList;
