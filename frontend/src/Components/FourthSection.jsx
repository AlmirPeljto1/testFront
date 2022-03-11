//IMPORTS
import styled from "styled-components";
//STYLED COMPONENTS
const Container = styled.div`
  width: 1440px;
  height: 850px;
  position: absolute;
  top: 2450px;
  left: 0;
  background-color: white;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: black;
  left: 75px;
  top: 200px;
`;
const WrapperHide = styled.div`
  z-index: 2;
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: #8db9ca;
  left: 75px;
  top: 200px;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const Wrapper1 = styled.div`
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: black;
  left: 514px;
  top: 200px;
`;
const WrapperHide1 = styled.div`
  z-index: 2;
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: #7fa9ae;
  left: 514px;
  top: 200px;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const Wrapper2 = styled.div`
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: black;
  left: 955px;
  top: 200px;
`;
const WrapperHide2 = styled.div`
  z-index: 2;
  position: absolute;
  width: 410px;
  height: 515px;
  background-color: #9099ba;
  left: 955px;
  top: 200px;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const ShopNow = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30px;
  top: 77px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    top: 75px;
    left: 24px;
    width: 162px;
    height: 54px;
    opacity: 1;
  }
`;
const ShopBtn = styled.div`
  position: absolute;
  width: 202px;
  height: 50px;
  background-color: white;
  border-radius: 26px;
  border: 1px solid #221f20;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 624px;
  bottom: 55px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    bottom: 53px;
    left: 618px;
    width: 218px;
    height: 54px;
  }
`;
const FourthSection = () => {
  return (
    <Container>
      <h1
        style={{
          position: "absolute",
          top: "117px",
          left: "537px",
          letterSpacing: "0.8px",
          color: "#221F20",
          fontSize: "40px",
          fontFamily: "Barlow Condensed",
        }}
      >
        EXPLORE OUR PRODUCTS
      </h1>
      <Wrapper>
        <img
          src={require("../IMAGES/1.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          FRENCH PRESS
        </span>
      </Wrapper>
      <WrapperHide>
        <img
          src={require("../IMAGES/5.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          FRENCH PRESS
        </span>
        <ShopNow>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "1.8px;",
              color: "#221F20",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            SHOP NOW
          </span>
        </ShopNow>
      </WrapperHide>
      <Wrapper1>
        <img
          src={require("../IMAGES/3.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          POUR OVER
        </span>
      </Wrapper1>
      <WrapperHide1>
        <img
          src={require("../IMAGES/6.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          POUR OVER
        </span>
        <ShopNow>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "1.8px;",
              color: "#221F20",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            SHOP NOW
          </span>
        </ShopNow>
      </WrapperHide1>
      <Wrapper2>
        <img
          src={require("../IMAGES/4.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          COLD BREW
        </span>
      </Wrapper2>
      <WrapperHide2>
        <img
          src={require("../IMAGES/8.png")}
          style={{
            position: "absolute",
            width: "410px",
            height: "515px",
            objectFit: "cover",
            opacity: "0.8",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "40px",
            fontSize: "22px",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          COLD BREW
        </span>
        <ShopNow>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "1.8px;",
              color: "#221F20",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            SHOP NOW
          </span>
        </ShopNow>
      </WrapperHide2>
      <ShopBtn>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "1.8px;",
            color: "#221F20",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          SHOP ALL PRODUCTS
        </span>
      </ShopBtn>
    </Container>
  );
};

export default FourthSection;
