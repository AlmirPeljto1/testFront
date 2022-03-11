//IMPORTS
import styled from "styled-components";
//STYLED COMPONENTS
const Container = styled.div`
  width: 1440px;
  height: 37px;
  background-color: #8db9ca;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 13px;
  font-family: "Josefin Sans";
  letter-spacing: 1.65px;
`;
const AlertBar = () => {
  return (
    <Container>
      <Title>FREE SHIPPING ON ALL U.S. ORDERS $49+</Title>
    </Container>
  );
};

export default AlertBar;
