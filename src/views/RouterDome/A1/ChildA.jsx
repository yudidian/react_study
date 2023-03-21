import React from 'react';
import {useLocation} from "react-router-dom";

function ChildA(props) {
  console.log(useLocation())
  return (
      <>
        <div>
          ChildA
        </div>
      </>
  );
}

export default ChildA;
