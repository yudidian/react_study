import React from 'react';
import styled from "styled-components";
import {Link, Redirect, Route, Switch} from "react-router-dom"
import ChildA from "@/views/RouterDome/A1/ChildA";
import ChildB from "@/views/RouterDome/A2/ChildB";
import ChildC from "@/views/RouterDome/A3/ChildC";

const ParentA = styled.div`
  display: flex;
  justify-content: flex-start;
  nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .box{
    flex: 2;
    background-color: azure;
  }
`

function DomeA(props) {
  return (
      <ParentA>
        <nav>
          <Link to="/a/ca">child-a</Link>
          <Link to="/a/cb">child-b</Link>
          <Link to="/a/cc">child-c</Link>
        </nav>
        <div className="box">
          <Switch>
            <Redirect from="/a" to="/a/ca" exact></Redirect>
            <Route path="/a/ca" component={ChildA}></Route>
            <Route path="/a/cb" component={ChildB}></Route>
            <Route path="/a/cc" component={ChildC}></Route>
          </Switch>
        </div>
      </ParentA>
  );
}

export default DomeA;
