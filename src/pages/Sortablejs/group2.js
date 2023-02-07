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
      animation: 500,
      group: "group",
      sort: true,
      onEnd: () => {},
    };
    //初始化
    Sortable.create(sortableRef?.current, ops1);
  }, []);
  return (
    <div ref={sortableRef} className="sortable" key="2">
      <div>item 4</div>
      <div>item 5</div>
      <div>item 6</div>
    </div>
  );
};
export default Demo2;
