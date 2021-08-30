import { Button, Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const HeaderStyled = styled.div`
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
`;
const FooterStyled = styled.div`
  font-size: 20px;
  text-align: center;
`;

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <HeaderStyled>
        <Row>
          <Col span={12}>
            <a
              href="https://github.com/vanlegithub/ChatApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Col>
          <Col span={12}>
            <a
              href="https://www.linkedin.com/in/vanleprofile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Col>
        </Row>
      </HeaderStyled>
      <Row justify="center" style={{ height: 620 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center", fontSize: 40 }} level={3}>
            CHAT APP - VAN LE
          </Title>
          <Button
            style={{
              width: "100%",
              height: "7%",
              textAlign: "center",
              fontSize: 20,
            }}
            onClick={() => handleLogin(fbProvider)}
          >
            SIGN IN WITH FACEBOOK ACCOUNT
          </Button>
        </Col>
      </Row>
      <FooterStyled>
        <Row>
          <Col span={12}>levan02402@gmail.com</Col>
          <Col span={12}>Copyright &copy;2021 by VanLe</Col>
        </Row>
      </FooterStyled>
    </div>
  );
}
