import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottm: 5px;
  color: white;
`;
export default function RoomList() {
  return (
    <div>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelStyled header="List Room" key="1">
          <LinkStyled>Room 1</LinkStyled>
          <LinkStyled>Room 2</LinkStyled>
          <LinkStyled>Room 3</LinkStyled>
          <Button
            type="text"
            icon={<PlusSquareOutlined />}
            className="add-room"
          >
            New Room
          </Button>
        </PanelStyled>
      </Collapse>
    </div>
  );
}
