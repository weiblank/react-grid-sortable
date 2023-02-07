/*
 * @Author: weiyayun
 * @Date: 2022-07-14 08:48:49
 * @Interface:
 * @Description:
 */
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Group1 = () => {
  const [state, setState] = useState([
    { id: 1, name: "shrek", width: 200 },
    { id: 2, name: "fiona", width: 200 },
    { id: 3, name: "nick", width: 200 },
  ]);
  return (
    <ReactSortable
      animation={500}
      group="group"
      delayOnTouchStart={true}
      delay={2}
      list={state}
      setList={setState}
    >
      {state.map((item) => (
        <div
          key={item.id}
          style={{
            width: 200,
            height: 50,
            borderRadius: "5px",
            background: "yellowGreen",
            margin: "5px 0",
          }}
        >
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};

export default Group1;
