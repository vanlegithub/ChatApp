import { Avatar, Typography, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../Firebase/config";

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
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);

  return (
    <WreapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.chartAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Sign out
      </Button>
    </WreapperStyled>
  );
}
