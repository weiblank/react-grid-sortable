/*
 * @Author: weiyayun
 * @Date: 2022-07-14 08:56:53
 * @Interface:
 * @Description:
 */
import React from "react";
import { Layout } from "antd";
import Group1 from "./group1";
import Group2 from "./group2";
import ReactGridLayout from "../ReactGridLayout";
const { Header, Sider, Content } = Layout;
const Demo3 = () => {
  // return (
  //   <div style={{ display: "flex" }}>
  //
  //
  //   </div>
  // );
  return (
    <Layout>
      <Layout>
        <Sider>
          <Group1 key="1" />
        </Sider>
        <Content style={{ minHeight: 800, position: "relative" }}>
          <Header>
            <Group2 />
          </Header>
          <ReactGridLayout />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Demo3;
