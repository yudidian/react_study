import React from 'react';
import {HashRouter, Link, NavLink, Routes} from "react-router-dom";
import styled from "styled-components";
import routers from "@/views/router_v6/routes"
import createRouter from "@/views/router_v6";


const LayoutBox = styled.div`
  width: 200px;

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

function Layout(props) {
  return (
      <HashRouter>
        <LayoutBox>
          <nav>
            <Link to="/a">A</Link>
            <NavLink to="/b">B</NavLink>
            <Link to="/c">C</Link>
          </nav>
          <div className="box">
            <Routes>
              {createRouter(routers)}
            </Routes>
          </div>
        </LayoutBox>
      </HashRouter>
  );
}

export default Layout;
