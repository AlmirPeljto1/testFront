//IMPORTS
import styled from "styled-components";
import "./navbar.css";
//STYLED COMPONENTS
const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 729px;
`;
const ImageContainer = styled.div`
  width: 1440px;
  height: 729px;
  background-color: black;
`;
const Image = styled.img`
  opacity: 0.8;
`;
const Title = styled.h1`
  position: absolute;
  text-align: center;
  color: white;
  top: 253px;
  left: 296px;
  width: 848px;
  height: 84px;
  font-size: 70px;
  font-family: "Barlow Condensed", sans-serif;
`;
const Paragraph = styled.p`
  position: absolute;
  top: 349px;
  left: 335px;
  width: 770px;
  height: 48px;
  text-align: center;
  font-size: 17px;
  color: white;
  font-family: "Nunito", sans-serif;
`;
const Button = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 420px;
  left: 615px;
  width: 208px;
  height: 50px;
  border: none;
  background-color: white;
  border-radius: 26px;
  letter-spacing: 1.8px;
  font-size: 12px;
  font-family: "Josefin Sans";
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    top: 418px;
    left: 609px;
    width: 222px;
    height: 54px;
  }
`;
const Span = styled.span`
  position: absolute;
  top: 684px;
  left: 671px;
  width: 80px;
  height: 15px;
  color: white;
  font-family: "Josefin Sans";
  font-weight: bold;
  letter-spacing: 2.1px;
  font-size: 14px;
`;

const FirstSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={require("../IMAGES/test.png")} />
      </ImageContainer>
      <Title>BREW ANYWHERE. BE ANYWHERE.</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo.
      </Paragraph>
      <Button>
        <span>POUR ON THE GO</span>
      </Button>
      <Span>EXPLORE</Span>
      <div class="ball">
        <img
          className="jump"
          src={require("../IMAGES/arrow-right-short.png")}
        />
      </div>
    </Container>
  );
};

export default FirstSection;
