//IMPORTS
import styled from "styled-components";
//STYLED COMPONENTS
const Container = styled.div`
  position: absolute;
  top: 1600px;
  left: 0px;
  width: 1440px;
  height: 850px;
  background-color: #f3f7f9;
`;

const ThirdSection = () => {
  return (
    <Container>
      <h3
        style={{
          textAlign: "center",
          letterSpacing: "1.2px",
          color: "#221F20",
          marginTop: "78px",
          fontSize: "12px",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
        }}
      >
        DESIGNED FOR REAL LIFE
      </h3>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "372px",
          height: "110px",
          fontSize: "48px",
          fontFamily: "Barlow Condensed",
          marginTop: "4px",
          marginLeft: "534px",
        }}
      >
        COFFEE MADE FOR YOUR LIFE ON THE GO.
      </h1>
      <p
        style={{
          width: "410px",
          height: "97px",
          textAlign: "center",
          fontSize: "16px",
          marginLeft: "515px",
          marginTop: "20px",
          fontFamily: "Nunito",
        }}
      >
        We understand coffee is a big part of your busy, active life. That’s why
        we create and develop products that allow you to bring your passion for{" "}
        <b>coffee-when you want it-</b> and wherever life takes you.
      </p>

      <img
        src={require("../IMAGES/screen.png")}
        style={{ position: "absolute", top: "108px", left: "75px" }}
      />

      <img
        src={require("../IMAGES/7.png")}
        style={{ position: "absolute", top: "494px", left: "75px" }}
      />
      <img
        src={require("../IMAGES/m.png")}
        style={{ position: "absolute", top: "392px", left: "391px" }}
      />
      <img
        src={require("../IMAGES/s.png")}
        style={{ position: "absolute", top: "392px", left: "785px" }}
      />
      <img
        src={require("../IMAGES/g.png")}
        style={{ position: "absolute", top: "130px", left: "985px" }}
      />
      <img
        src={require("../IMAGES/d.png")}
        style={{
          position: "absolute",
          top: "20px",
          left: "1180px",
          width: "239px",
          height: "278px",
          objectFit: "cover",
        }}
      />
    </Container>
  );
};

export default ThirdSection;
