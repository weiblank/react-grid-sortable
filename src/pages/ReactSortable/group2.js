/*
 * @Author: weiyayun
 * @Date: 2022-07-14 08:48:49
 * @Interface:
 * @Description:
 */
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Group2 = () => {
  const [state, setState] = useState([
    { id: 4, name: "请将组件拖入到这里", width: 200 },
  ]);
  return (
    <ReactSortable
      animation={500}
      group="group"
      delayOnTouchStart={true}
      delay={2}
      list={state}
      setList={setState}
      style={{ marginLeft: 100, display: "flex" }}
    >
      {state.map((item, index) => (
        <div
          key={item.id}
          style={{
            width: item.width,
            height: 50,
            borderRadius: "5px",
            background: "yellowGreen",
          }}
        >
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};

export default Group2;
