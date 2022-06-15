import React from "react";
import { Link, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

function Read() {
  const location = useLocation();
  const { req } = location.state;
  const { name } = location.state;
  const { link } = location.state;
  let reqList = [];

  function process() {
    for (const key in req) {
      if (key !== "company" && key !== "id" && key !== "regLink") {
        reqList.push([key, req[key]]);
      }
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <div class="container border mt-1 rounded pb-4 ">
        {/* <Link to="/">
          <button class="btn btn-info mt-3 shadow-lg ">
            <strong class="text-white">Home</strong>
          </button>
        </Link> */}
        <Link to="/jobs">
          <button class="btn btn-success mt-3 shadow-lg ml-3 ">
            <strong class="text-white">Companies</strong>
          </button>
        </Link>
        <div class="container table-responsive-xl pt-3  ">
          {process()}
          <table
            class="table table-striped border border-success"
            style={{ tableLayout: "fixed" }}
          >
            <thead class="table-danger border">
              <tr>
                <th colSpan="2">Company : {name}</th>
              </tr>
            </thead>
            <tbody class="table table-bordered">
              {reqList.map((data, ind) => (
                <tr key={ind}>
                  <td>{data[0]}</td>
                  <td style={{ wordWrap: "break-word" }}>
                    <div>{data[1]}</div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  <a
                    href={link}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      class="btn btn-info  container "
                      style={{ display: link !== "Not" ? "block" : "none" }}
                    >
                      {link !== "Not" ? "Apply/Register" : "Link Not Available"}
                    </button>
                  </a>
                  <span
                    style={{
                      display: link !== "Not" ? "none" : "block",
                      color: "red",
                    }}
                  >
                    Link not available
                    <div style={{ color: "green" }}>
                      Please contact Organization
                    </div>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Read;
