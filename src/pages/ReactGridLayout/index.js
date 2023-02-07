/*
 * @Author: weiyayun
 * @Date: 2022-07-14 16:16:49
 * @Interface:
 * @Description:
 */
import GridLayout from "react-grid-layout";
import { Table, Tag } from "antd";
import { useRef, useState } from "react";
import "./index.css";
let time;
const ReactGridLayout = () => {
  const tableRef = useRef(null);
  // static 固定
  const [layout, setLayout] = useState([
    {
      i: "a",
      x: 4,
      y: 1,
      w: 5,
      h: 2,
      minW: 3,
      maxH: 4,
      minH: 2,
    },
    { i: "b", x: 4, y: 4, w: 5, h: 2 },
    { i: "c", x: 6, y: 8, w: 5, h: 2 },
    { i: "d", x: 4, y: 12, w: 5, h: 2 },
    { i: "e", x: 4, y: 16, w: 4, h: 2 },
  ]);

  const columns = [
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
  ];

  const mouseDown = (e) => {
    time = setTimeout(() => {
      e.target.classList.add("bebe");
    }, 1000);
  };
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={24}
      width={1200}
      margin={[20, 20]}
      //   onLayoutChange={(newLayout) => {
      //     let canResize = layout.find((el) => el.h < 2);
      //     console.log(newLayout, "newLayout");
      //     if (canResize) {
      //       setLayout(layout);
      //     } else {
      //       setLayout(newLayout);
      //     }
      //   }}
      resizeHandle={
        <div
          class="react-resizable-handle react-resizable-handle-se"
          onClick={mouseDown}
        ></div>
      }
    >
      {layout.map((el) => {
        return (
          <div
            className="dragItem"
            key={el.i}
            style={{
              border: "1px dashed gray",
              position: "relative",
            }}
          >
            <Table
              ref={tableRef}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        );
      })}
    </GridLayout>
  );
};

export default ReactGridLayout;
