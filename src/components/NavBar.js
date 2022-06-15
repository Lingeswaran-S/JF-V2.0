import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  function reloadPage() {
    window.location.reload();
  }
  return (
    // <div class="pos-f-t mt-2  sticky-top ">
    //   <div class="collapse" id="navbarToggleExternalContent">
    //     <div class="bg-dark p-4">
    //       <h4 class="text-white">Collapsed content</h4>
    //       <span class="text-muted">Toggleable via the navbar brand.</span>
    //     </div>
    //   </div>

    //   <nav class="navbar navbar-dark bg-dark rounded topnavbar ">
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    // data-target="#navbarToggleExternalContent"
    //       aria-controls="navbarToggleExternalContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //       <span>
    //         <strong class="text-white p-2">
    //           by
    //           <strong class="text-warning p-1 rounded p-2">Linges</strong>
    //         </strong>
    //       </span>
    //     </button>
    //   </nav>
    // </div>
    //-----------------------------
    // <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    //   {/* <a class="navbar-brand" href="#">
    //     JobsF
    //   </a> */}
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>

    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav mr-auto">
    //       <li class="nav-item active">
    //         {/* <a class="nav-link" href="#">
    //           Home <span class="sr-only">(current)</span>
    //         </a> */}

    // <Link to="/">
    //   <button class="btn btn-info  shadow-lg ">
    //     <strong class="text-white">Home</strong>
    //   </button>
    // </Link>
    // <button
    //   onClick={reloadPage}
    //   class="btn btn-danger  ml-3 shadow-lg "
    // >
    //   <strong class="text-white">Reload</strong>
    // </button>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           Link
    //         </a>
    //       </li>
    //     </ul>
    // {/* <form class="form-inline my-2 my-lg-0">
    //   <input
    //     class="form-control mr-sm-2"
    //     type="search"
    //     placeholder="Search"
    //     aria-label="Search"
    //   />
    //   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
    //     Search
    //   </button>
    // </form> */}
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark rounded mt-2  sticky-top">
      <ul class="navbar-nav mt-2 ">
        <li class="nav-item">
          <Link to="/">
            <button class="btn btn-info mr-3 mb-2 shadow-lg ">
              <strong class="text-white">Home</strong>
            </button>
          </Link>
        </li>
        <li class="nav-item">
          <button
            onClick={reloadPage}
            class="btn btn-danger mr-3 mb-2  shadow-lg "
          >
            <strong class="text-white">Reload</strong>
          </button>
        </li>
        <li class="nav-item">
          <form class="form-inline  my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="button">
              Search
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
