import React, { useEffect, useState } from "react";

// import css
import "./display.scss";

export default function Display({ value, memo }) {
  // const [float, setFloat] = useState(false);

  // useEffect(() => {
  //   if (!Number.isInteger(value) && Number(value) !== 0 && Number(value) > 0) setFloat(round(Number(value), 2));
  // }, [value]);

  // console.log("Float", float);

  return (
    <div className="display align-items-end">
      <p className="m-0 memo user-select-none"> {memo.length > 0 && memo} </p>
      <p className="m-0 user-select-none">
        {(value?.length > 0 && value)  || 0}
      </p>
    </div>
  );
}
