//IMPORTS
import styled from "styled-components";
import "./navbar.css";
//STYLED COMPONENTS
const Wrapper = styled.div``;
const Container = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  top: 37px;
  left: 0px;
  width: 1440px;
  height: 66px;

  background-color: #ffffff;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const LeftShop = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  letter-spacing: 1.95px;
  color: #221f20;
  font-size: 13px;
  top: -7px;
  left: 75px;
  font-family: "Josefin Sans";
  font-weight: bold;
  &:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;
const LeftStory = styled.span`
  z-index: 100;
  flex-direction: row;
  position: absolute;
  top: -7px;
  left: 180px;
  width: 100px;
  height: 13px;
  letter-spacing: 1.95px;
  color: #221f20;
  font-size: 13px;
  font-family: "Josefin Sans";
  font-weight: bold;
`;
const Center = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  z-index: 100;
  position: absolute;
  left: 660px;
`;
const Right = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  position: relative;
`;
const Item1 = styled.span`
  position: absolute;
  top: -7px;
  left: 974px;
  width: 113px;
  height: 13px;
  letter-spacing: 1.95px;
  color: #221f20;
  font-size: 13px;
  font-family: "Josefin Sans";
  font-weight: bold;
`;
const Item2 = styled.span`
  position: absolute;
  top: -7px;
  left: 1137px;
  width: 43px;
  height: 13px;
  letter-spacing: 1.95px;
  color: #221f20;
  font-size: 13px;
  font-family: "Josefin Sans";
  font-weight: bold;
`;
const Item3 = styled.div`
  position: absolute;
  top: -10px;
  left: 1230px;
  width: 19px;
  height: 19px;
`;
const Item4 = styled.div`
  position: absolute;
  top: -10px;
  left: 1273px;
  width: 16px;
  height: 19px;
`;
const Item5 = styled.div`
  z-index: 100;
  position: absolute;
  top: -13px;
  left: 1313px;
  width: 20px;
  height: 24px;
`;
const Item6 = styled.div`
  position: absolute;
  top: 0px;
  left: 1341px;
  width: 24px;
  height: 24px;
`;
const ImageContainer = styled.div`
  z-index: 99;
  position: absolute;
  top: 107px;
  left: 92px;
  width: 144px;
  height: 279px;
`;
const Span = styled.span`
  z-index: 99;
  position: absolute;
  bottom: 6px;
  left: -9px;
  width: 200px;
  height: 31px;
  color: #221f20;
  font-family: "Barlow Condensed";
  font-weight: bold;
  letter-spacing: 0.65px;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }
`;
const ImageContainer1 = styled.div`
  z-index: 99;
  position: absolute;
  top: 107px;
  left: 392px;
  width: 144px;
  height: 279px;
`;
const ImageContainer2 = styled.div`
  z-index: 99;
  position: absolute;
  top: 107px;
  left: 686px;
  width: 144px;
  height: 279px;
`;
const ShopBtn = styled.div`
  z-index: 99;
  position: absolute;
  width: 128px;
  height: 44px;
  background-color: white;
  border-radius: 26px;
  border: 1px solid #221f20;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 307px;
  bottom: 51px;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <div className="dropdown">
            <div className="dropDiv">SHOP</div>
            <svg
              className="arrowUp"
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="5"
              viewBox="0 0 9 5"
            >
              <path
                id="arrow-ios-downward-fill"
                d="M11.991,18.5a.6.6,0,0,1-.411-.164l-3.85-3.57a.771.771,0,0,1-.083-1.007.6.6,0,0,1,.9-.093l3.44,3.2,3.44-3.084a.6.6,0,0,1,.472-.156.627.627,0,0,1,.432.263.767.767,0,0,1,.16.543.737.737,0,0,1-.249.5L12.4,18.375A.594.594,0,0,1,11.991,18.5Z"
                transform="translate(-7.498 -13.498)"
                fill="#221f20"
                opacity="0.5"
              />
            </svg>
            <div className="dropdown-content">
              <div className="arrowCont">
                <svg
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                >
                  <path
                    id="arrow-ios-downward-fill"
                    d="M11.991,18.5a.6.6,0,0,1-.411-.164l-3.85-3.57a.771.771,0,0,1-.083-1.007.6.6,0,0,1,.9-.093l3.44,3.2,3.44-3.084a.6.6,0,0,1,.472-.156.627.627,0,0,1,.432.263.767.767,0,0,1,.16.543.737.737,0,0,1-.249.5L12.4,18.375A.594.594,0,0,1,11.991,18.5Z"
                    transform="translate(-7.498 -13.498)"
                    fill="#221f20"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <ImageContainer>
                <img src={require("../IMAGES/11.png")} />
                <Span>FRENCH PRESS</Span>
              </ImageContainer>
              <ImageContainer1>
                <img
                  src={require("../IMAGES/12.png")}
                  style={{ position: "absolute", left: "10px" }}
                />
                <Span>TRAVEL PRESS</Span>
              </ImageContainer1>
              <ImageContainer2>
                <img
                  src={require("../IMAGES/13.png")}
                  style={{ position: "absolute", left: "-45px", top: "-15px" }}
                />
                <Span>POUR OVER</Span>
              </ImageContainer2>
              <span
                style={{
                  zIndex: "99",
                  position: "absolute",
                  right: "267px",
                  top: "115px",
                  fontFamily: "Josefin Sans",
                  letterSpacing: "1.3px",
                  color: "#221F20",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                OTHER COLLECTIONS
              </span>
              <span
                style={{
                  zIndex: "99",
                  position: "absolute",
                  right: "314px",
                  top: "144px",
                  fontFamily: "Barlow Condensed",
                  letterSpacing: "0.57px",
                  color: "#221F20",
                  fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "left",
                  width: "120px",
                  height: "160px",
                }}
              >
                COLD BREW ESPRESSO TASTING CUPS ACCESSORIES
              </span>
              <ShopBtn>
                <span
                  style={{
                    zIndex: "99",
                    fontSize: "12px",
                    letterSpacing: "1.8px;",
                    color: "#221F20",
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                  }}
                >
                  SHOP ALL
                </span>
              </ShopBtn>
            </div>
          </div>
          <LeftStory>OUR STORY</LeftStory>
        </Left>
        <Center>
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120.815"
              height="28"
              viewBox="0 0 120.815 28"
            >
              <g
                id="ESPRO_Logo"
                data-name="ESPRO Logo"
                transform="translate(-132.052 -143.893)"
              >
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M149.092,145.5h-16.35a.649.649,0,0,0-.69.722v25.428a.65.65,0,0,0,.69.724h16.35a.649.649,0,0,0,.688-.724v-1.869a.649.649,0,0,0-.688-.724h-13.3V160.41h10.933a.648.648,0,0,0,.688-.721v-1.871a.649.649,0,0,0-.688-.724H135.794v-8.275h13.3a.649.649,0,0,0,.688-.723v-1.871A.649.649,0,0,0,149.092,145.5Z"
                  transform="translate(0 -1.046)"
                  fill="#221f20"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M205.436,157.187l-5.911-1.87c-2.827-.909-3.981-2.113-3.981-4.155,0-2.438,2.132-3.953,5.563-3.953,3.329,0,5.549,1.53,6.422,4.427a.75.75,0,0,0,.741.623H210.4a.672.672,0,0,0,.528-.221.765.765,0,0,0,.154-.643c-.913-4.767-4.548-7.5-9.973-7.5-5.565,0-9.3,3-9.3,7.455,0,3.592,1.958,5.964,5.987,7.253l5.916,1.871h0c2.762.873,3.94,2.115,3.94,4.154,0,2.474-2.206,3.951-5.9,3.951s-6.009-1.489-6.892-4.424a.746.746,0,0,0-.742-.624h-2.128a.67.67,0,0,0-.524.219.769.769,0,0,0-.158.642c.926,4.838,4.635,7.5,10.444,7.5,5.857,0,9.641-2.926,9.641-7.454C211.387,160.869,209.385,158.429,205.436,157.187Z"
                  transform="translate(-38.596)"
                  fill="#221f20"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M273.492,145.5h-9.8a.649.649,0,0,0-.688.722v25.428a.649.649,0,0,0,.688.724h2.365a.649.649,0,0,0,.688-.724v-7.878h6.745c5.891,0,9.136-3.244,9.136-9.135S279.383,145.5,273.492,145.5Zm0,14.957h-6.745V148.819h6.745c3.478,0,5.394,2.067,5.394,5.821S276.97,160.46,273.492,160.46Z"
                  transform="translate(-85.317 -1.046)"
                  fill="#221f20"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M412.25,143.9a14,14,0,1,0,14.051,14A14.041,14.041,0,0,0,412.25,143.9Zm0,24.358a10.359,10.359,0,1,1,10.4-10.359A10.389,10.389,0,0,1,412.25,168.253Z"
                  transform="translate(-173.433 -0.001)"
                  fill="#221f20"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M349.549,164.563c-.363-.628-1.372-2.357-2.085-3.53a7.4,7.4,0,0,0,5.172-7.144c0-5.251-3.415-8.386-9.134-8.386h-9.457a.65.65,0,0,0-.691.722v25.428a.651.651,0,0,0,.691.724h2.362a.649.649,0,0,0,.688-.724V162.28h6.686l1.617,2.633,4.056,6.919a.947.947,0,0,0,.805.545h2.771a.662.662,0,0,0,.634-.3.646.646,0,0,0-.062-.679Zm-.653-10.674c0,3.178-2.016,5.075-5.394,5.075h-6.407V148.817H343.5C346.879,148.817,348.9,150.713,348.9,153.889Z"
                  transform="translate(-131.152 -1.046)"
                  fill="#221f20"
                />
              </g>
            </svg>
          </Logo>
        </Center>
        <Right>
          <Item1>BREW GUIDES</Item1>
          <Item2>BLOG</Item2>
          <Item3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
            >
              <g id="search-line" transform="translate(-3.33 -3)">
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M11.046,4.217a6.5,6.5,0,1,1-6.494,6.5,6.5,6.5,0,0,1,6.494-6.5m0-1.217a7.716,7.716,0,1,0,7.716,7.716A7.716,7.716,0,0,0,11.046,3Z"
                  fill="#221f20"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M31.428,30.274l-4.375-4.4-.843.837,4.375,4.4a.594.594,0,0,0,.843-.837Z"
                  transform="translate(-9.27 -9.287)"
                  fill="#221f20"
                />
              </g>
            </svg>
          </Item3>
          <Item4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.076"
              height="20"
              viewBox="0 0 17.076 20"
            >
              <g
                id="My_Account_icon"
                data-name="My Account icon"
                transform="translate(-192.935 -176.9)"
              >
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="4.672"
                  cy="4.672"
                  r="4.672"
                  transform="translate(196.549 177.4)"
                  fill="none"
                  stroke="#221f20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M209.676,274.881a8.052,8.052,0,0,0-16.076,0Z"
                  transform="translate(-0.165 -78.481)"
                  fill="none"
                  stroke="#221f20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </svg>
          </Item4>
          <Item5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.25"
              height="24.25"
              viewBox="0 0 20.25 24.25"
            >
              <g
                id="Shopping_bag_icon"
                data-name="Shopping bag icon"
                transform="translate(-2609.057 -2828.352)"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M2628.791,2909.263h-3.5a.394.394,0,1,0,0,.788h3.107v16.8h-18.419v-16.8h3.192a.394.394,0,1,0,0-.788h-3.59a.4.4,0,0,0-.4.394v17.584a.4.4,0,0,0,.4.394h19.208a.4.4,0,0,0,.4-.394h0v-17.584A.4.4,0,0,0,2628.791,2909.263Z"
                  transform="translate(0 -75.158)"
                  fill="#221f20"
                  stroke="#221f20"
                  stroke-width="0.25"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M2721.271,2909.386a.4.4,0,0,0,.4.395h3.493a.395.395,0,1,0,0-.79h-3.493A.4.4,0,0,0,2721.271,2909.386Z"
                  transform="translate(-104.219 -74.896)"
                  fill="#221f20"
                  stroke="#221f20"
                  stroke-width="0.25"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M2694.554,2828.477a4.3,4.3,0,0,0-4.3,4.3l-.027,4.544a.393.393,0,0,0,.393.393.388.388,0,0,0,.388-.393l.027-4.544a3.515,3.515,0,1,1,7.03,0l-.028,4.544a.393.393,0,1,0,.785,0l.028-4.544A4.3,4.3,0,0,0,2694.554,2828.477Z"
                  transform="translate(-75.34)"
                  fill="#221f20"
                  stroke="#221f20"
                  stroke-width="0.25"
                />
              </g>
            </svg>
          </Item5>
          <Item6></Item6>
        </Right>
        <div
          style={{
            zIndex: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: "75px",
            top: "59px",
            height: "24px",
            width: "24px",
            borderRadius: "50%",
            backgroundColor: "rgba(101, 154, 177, 0.3)",
          }}
        >
          0
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
