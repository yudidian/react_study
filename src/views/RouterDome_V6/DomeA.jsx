import React from 'react';
import styled from "styled-components";
import {Link, Outlet, useNavigate} from "react-router-dom"

const ParentA = styled.div`
  display: flex;
  justify-content: flex-start;

  nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .box {
    flex: 2;
    background-color: azure;
  }
`

function DomeA(props) {
  const navigate = useNavigate()
  return (
      <ParentA>
        <nav>
          <Link to="/a/childA">child-a</Link>
          <Link to="/a/childB">child-b</Link>
          <Link to="/a/childC">child-c</Link>
        </nav>
        <div className="box">
          <button onClick={() => {
            navigate('/a/childA', {
              search: 'id=10&name=CB',
              replace: true,
              state: {
                cost: 100,
                num: 20
              }
            })
          }}>跳转</button>
          <Outlet></Outlet>
        </div>
      </ParentA>
  );
}

export default DomeA;
