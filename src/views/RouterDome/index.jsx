import React from 'react';
import {HashRouter, Link, NavLink} from "react-router-dom"
import styled from "styled-components";
import RouterView from "@/views/router/routerView";
import routers from "@/views/router/routers";

const LayoutBox = styled.div`
  width: 200px;
  nav{
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
            <RouterView routers={routers}></RouterView>
          </div>
        </LayoutBox>
      </HashRouter>
  );
}

export default Layout;
