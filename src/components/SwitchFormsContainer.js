import React from "react";
import styled from "styled-components";

const Panels = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
`;
const SignInPanel = styled(Panel)`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
`;
const SignUpPanel = styled(Panel)`
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
`;
const Content = styled.div`
  color: #f9fcff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
`;

const SignUpContent=styled(Content)`
transform: translateX(800px);
`;

const Title = styled.h3`
  font-weight: 800;
  line-height: 1;
  font-size: 2.2rem;
`;
const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  margin: 20px 0;
`;
const SwitchButton = styled.button`
  width: 150px;
  outline: none;
  height: 41px;
  border-radius: 30px;
  color:#f9fcff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  letter-spacing: 0.3rem;
  font-size: 1.5rem;
  margin: 0;
  background: none;
  border: 2px solid #f9fcff;;
  &:hover {
    background-color: #4d84e2;
  }
`;
const Image = styled.img`
width: 430px;
height:auto;
transition: transform 1.1s ease-in-out;
transition-delay: 0.4s;
`;

const SignUpImage=styled(Image)`
transform: translateX(800px);
`;

const SwitchFormsContainer = () => {
  return (
    <Panels>
      <SignInPanel>
        <Content>
          <Title>Already a member?</Title>
          <Text>Please sign in to access the admin panel</Text>
          <SwitchButton>Sign in</SwitchButton>
        </Content>
        <Image src="images/dashboard.svg" alt="" />
      </SignInPanel>
      <SignUpPanel>
      <SignUpContent>
          <Title>Not a member?</Title>
          <Text>Please sign up to unlock the content.</Text>
          <SwitchButton>Sign up</SwitchButton>
        </SignUpContent>
        <SignUpImage src="images/lockedDashboard.svg" alt="" />
      </SignUpPanel>
    </Panels>
  );
};

export default SwitchFormsContainer;
