import { Avatar, Typography, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { auth, db } from "../../Firebase/config";

const WreapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    bordor-bottm; 1px solid rgba(82,38,83);

    .username{
        color: white;
        margin-left: 5px;
    }
`;
export default function UserInfo() {
  React.useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ data, snapshot, docs: snapshot.docs });
    });
  });
  return (
    <WreapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Sign out
      </Button>
    </WreapperStyled>
  );
}
