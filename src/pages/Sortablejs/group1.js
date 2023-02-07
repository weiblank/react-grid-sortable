/*
 * @Author: weiyayun
 * @Date: 2022-07-13 16:34:54
 * @Interface:
 * @Description:
 */
import React, { useLayoutEffect, useRef } from "react";
import Sortable from "sortablejs";

const Demo2 = () => {
  const sortableRef = useRef(null);
  useLayoutEffect(() => {
    var ops1 = {
      animation: 1000,
      sort: false,
      group: "group",
      onEnd: (evt) => {
        console.log(evt, "evt");
      },
    };
    Sortable.create(sortableRef.current, ops1);
  }, []);
  return (
    <div ref={sortableRef} className="sortable" key="1">
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </div>
  );
};
export default Demo2;
