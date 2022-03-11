//IMPORTS
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//STYLED-COMPONENTS
const Container = styled.div``;
const SubTitle = styled.h3`
  position: absolute;
  top: 900px;
  left: 620px;
  width: 200px;
  height: 12px;
  letter-spacing: 1.2px;
  color: #221f20;
  text-align: center;
  font-size: 12px;
  font-family: "Josefin Sans";
  font-weight: bold;
`;
const Title = styled.h1`
  position: absolute;
  top: 916px;
  left: 585px;
  width: 270px;
  height: 48px;
  text-align: center;
  color: #221f20;
  font-size: 40px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: bold;
`;
const Wrapper = styled.div`
  position: absolute;
  background: #ffffff;
  top: 1050px;
  left: 75px;
  width: 300px;
  height: 458px;
  border-radius: 12px;
  transition: 0.5s;
  &:hover {
    top: 1040px;
    box-shadow: 0px 8px 10px #dadada, -10px 8px 15px #dadada,
      10px 8px 15px #dadada;
  }
`;
const WrapperImage = styled.img`
  background-color: #f6f6f6;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 295px; ;
`;
const ItemTitle = styled.span`
  position: absolute;
  top: 330px;
  left: 13px;
  letter-spacing: 0.35px;
  color: #221f20;
  font-size: 14px;
  font-weight: bold;
  font-family: "Josefin Sans";
`;
const ItemPrice = styled.span`
  position: absolute;
  top: 380px;
  left: 13px;
  font-family: "Nunito";
  font-size: 15px;
`;
const Wrapper1 = styled.div`
  position: absolute;
  background: #ffffff;
  top: 1050px;
  left: 405px;
  width: 300px;
  height: 458px;
  border-radius: 12px;
  transition: 0.5s;
  &:hover {
    top: 1040px;
    box-shadow: 0px 8px 10px #dadada, -10px 8px 15px #dadada,
      10px 8px 15px #dadada;
  }
`;
const WrapperImage1 = styled.img`
  background-color: #f6f6f6;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 295px; ;
`;
const ItemTitle1 = styled.span`
  position: absolute;
  top: 330px;
  left: 13px;
  letter-spacing: 0.35px;
  color: #221f20;
  font-size: 14px;
  font-weight: bold;
  font-family: "Josefin Sans";
`;
const ItemPrice1 = styled.span`
  position: absolute;
  top: 380px;
  left: 13px;
  font-family: "Nunito";
  font-size: 15px;
`;
const Wrapper2 = styled.div`
  position: absolute;
  background: #ffffff;
  top: 1050px;
  left: 735px;
  width: 300px;
  height: 421px;
  border-radius: 12px;
  transition: 0.5s;
  &:hover {
    top: 1040px;
    box-shadow: 0px 8px 10px #dadada, -10px 8px 15px #dadada,
      10px 8px 15px #dadada;
  }
`;
const Wrapper3 = styled.div`
  position: absolute;
  background: #ffffff;
  top: 1050px;
  left: 1065px;
  width: 300px;
  height: 458px;
  border-radius: 12px;
  z-index: 3;
  transition: 0.5s;
  &:hover {
    top: 1040px;
    box-shadow: 0px 8px 10px #dadada, -10px 8px 15px #dadada,
      10px 8px 15px #dadada;
  }
`;
const Wrapper4 = styled.div`
  overflow: hidden;
  position: absolute;
  background: #ffffff;
  top: 1050px;
  left: 1395px;
  width: 300px;
  height: 421px;
  border-radius: 12px;
  transition: 0.5s;
  &:hover {
    top: 1040px;
    box-shadow: 0px 8px 10px #dadada, -10px 8px 15px #dadada,
      10px 8px 15px #dadada;
  }
`;
const SecondSection = () => {
  return (
    <Container>
      <SubTitle>POUR YOUR BEST CUP WITH</SubTitle>
      <Title>OUR BEST SELLERS</Title>
      <Wrapper>
        <WrapperImage src={require("../IMAGES/5.png")} />
        <svg
          style={{ position: "absolute", top: "305px", left: "13" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "30" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "47" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "64" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "81" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <ItemTitle>ESPRO COFFEE FRENCH PRESS P7</ItemTitle>
        <ItemPrice>$109.95 - $139.95</ItemPrice>
        <div
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid #221F20",
            borderRadius: "50%",
            position: "absolute",
            top: "410px",
            left: "13px",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              backgroundColor: "#CACCCE",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              position: "absolute",
              top: "1px",
              left: "1px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "43px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "73px",
            backgroundColor: "#CACCCE",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #000000",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "103px",
            backgroundColor: "#000000",
          }}
        ></div>
      </Wrapper>
      <Wrapper1>
        <WrapperImage1 src={require("../IMAGES/6.png")} />
        <svg
          style={{ position: "absolute", top: "305px", left: "13" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "30" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "47" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "64" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "81" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#EAEAEA"
          />
        </svg>
        <ItemTitle1>ESPRO COFFEE FRENCH PRESS P6</ItemTitle1>
        <ItemPrice1>
          $89.95{" "}
          <p
            style={{
              position: "absolute",
              top: "0",
              left: "58px",
              color: "#CACCCE",
            }}
          >
            $99.95
          </p>
          <hr
            style={{
              position: "absolute",
              top: "11px",
              width: "49px",
              left: "58px",
              border: "none",
              height: "1px",
              backgroundColor: "#CACCCE",
            }}
          />
        </ItemPrice1>
        <div
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid #221F20",
            borderRadius: "50%",
            position: "absolute",
            top: "410px",
            left: "13px",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              backgroundColor: "#CACCCE",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              position: "absolute",
              top: "1px",
              left: "1px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "43px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "73px",
            backgroundColor: "#CACCCE",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #000000",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "103px",
            backgroundColor: "#000000",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "20px",
            width: "26px",
            height: "50px",
            transform: "rotate(0deg)",
            backgroundColor: "#F24343",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            top: "17px",
            left: "17px",
            fontSize: "12px",
            transform: "rotate(270deg)",
            color: "white",
            fontSize: "11px",
            fontFamily: "Nunito",
            fontWeight: "800",
            letterSpacing: "1.1px",
          }}
        >
          SALE
        </span>
      </Wrapper1>
      <Wrapper2>
        <WrapperImage src={require("../IMAGES/5.png")} />
        <svg
          style={{ position: "absolute", top: "305px", left: "13" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "30" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "47" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "64" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "81" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <ItemTitle>BLOOM POUR OVER COFFEE BREWING KIT, 18 OZ</ItemTitle>
        <ItemPrice>$99.95</ItemPrice>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "20px",
            width: "26px",
            height: "50px",
            transform: "rotate(0deg)",
            backgroundColor: "#6BBBAE",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            top: "17px",
            left: "18px",
            transform: "rotate(270deg)",
            color: "white",
            fontSize: "11px",
            fontFamily: "Nunito",
            fontWeight: "800",
            letterSpacing: "1.1px",
          }}
        >
          NEW!
        </span>
      </Wrapper2>
      <Wrapper3>
        <WrapperImage src={require("../IMAGES/8.png")} />
        <svg
          style={{ position: "absolute", top: "305px", left: "13" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "30" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "47" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "64" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "81" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <ItemTitle>ESPRO ULTRALIGHT COFFEE PRESS P0</ItemTitle>
        <ItemPrice>$44.95</ItemPrice>
        <div
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid #221F20",
            borderRadius: "50%",
            position: "absolute",
            top: "410px",
            left: "13px",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              backgroundColor: "#CACCCE",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              position: "absolute",
              top: "1px",
              left: "1px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "43px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #CACCCE",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "73px",
            backgroundColor: "#CACCCE",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #000000",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "103px",
            backgroundColor: "#000000",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #285C4D",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "133px",
            backgroundColor: "#285C4D",
          }}
        ></div>
        <div
          style={{
            width: "22px",
            height: "22px",
            border: "1px solid #02205C",
            borderRadius: "50%",
            position: "absolute",
            top: "411px",
            left: "133px",
            backgroundColor: "#02205C",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "20px",
            width: "26px",
            height: "114px",
            transform: "rotate(0deg)",
            backgroundColor: "#8DB9CA",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            top: "49px",
            left: "-14px",
            fontSize: "11px",
            transform: "rotate(270deg)",
            color: "white",
            fontFamily: "Nunito",
            fontWeight: "800",
            letterSpacing: "1.1px",
          }}
        >
          BACK IN STOCK
        </span>
      </Wrapper3>
      <div
        style={{
          zIndex: "2",
          width: "46px",
          height: "46px",
          position: "absolute",
          top: "1250px",
          left: "1357px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
      <ArrowForwardIcon
        style={{
          position: "absolute",
          top: "1260px",
          left: "1368px",
          zIndex: "3",
        }}
      />
      <Wrapper4>
        <WrapperImage src={require("../IMAGES/5.png")} />
        <svg
          style={{ position: "absolute", top: "305px", left: "13" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "30" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "47" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "64" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <svg
          style={{ position: "absolute", top: "305px", left: "81" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        >
          <path
            id="Path_223"
            data-name="Path 223"
            d="M3.388,15.07a.5.5,0,0,1-.7-.553L3.466,10.1.164,6.971a.518.518,0,0,1,.265-.886l4.592-.65L7.068,1.4a.482.482,0,0,1,.869,0L9.985,5.435l4.592.65a.518.518,0,0,1,.265.886l-3.3,3.132.778,4.415a.5.5,0,0,1-.7.553L7.5,12.965,3.387,15.07Z"
            transform="translate(-0.003 -1.123)"
            fill="#f0d563"
          />
        </svg>
        <ItemTitle>ESPRO COFFEE FRENCH PRESS P6</ItemTitle>
        <ItemPrice>$99.95</ItemPrice>
      </Wrapper4>
    </Container>
  );
};

export default SecondSection;
