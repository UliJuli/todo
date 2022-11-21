import React from "react";
import {useSelector} from "react-redux";

const Errors = () => {
  const error = useSelector((state) => state.error);
  return <div style={{textAlign: "center"}}>
    {error && <p style={{color: 'red'}}>Test: {error}</p>}
  </div>

}

export default Errors;