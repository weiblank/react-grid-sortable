/*
 * @Author: weiyayun
 * @Date: 2022-07-13 14:23:35
 * @Interface:
 * @Description:
 */
import React from "react";
import Group1 from "./group1";
import Group2 from "./group2";
import "../index.css";
const Demo2 = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "45%",
        marginTop: 100,
        // width: 600,
        // height: 400,
        // border: "1px solid red",
        // margin: " 10px auto ",
      }}
    >
      <Group1 key="1" />
      <Group2 key="2" />
    </div>
  );
};
export default Demo2;
