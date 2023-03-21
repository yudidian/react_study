import React from 'react';
import {useLocation} from "react-router-dom";

function ChildB(props) {
  console.log("location", useLocation())

  return (
      <>
        <div>
          ChildB
        </div>
      </>
  );
}

export default ChildB;
