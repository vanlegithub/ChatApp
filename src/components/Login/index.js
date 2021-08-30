import { Button, Col, Row, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../../Firebase/config";
import { addDocument, generateKeywords } from "../../Firebase/services";
const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        provider: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
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
