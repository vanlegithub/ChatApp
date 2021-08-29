import { Button, Col, Row, Typography } from "antd";
import firebase from "firebase";
import React from "react";
import { auth } from "../Firebase/config";

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span="{8}">
          <Title style={{ textAlign: "center" }}>Chat App</Title>
          <Button style={{ width: "100%", marginBottom: "5" }}>
            Login with Google Account
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Login with Facebook Account
          </Button>
        </Col>
      </Row>
    </div>
  );
}
