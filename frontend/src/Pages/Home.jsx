//IMPORTS
import styled from "styled-components";
import AlertBar from "../Components/AlertBar";
import FirstSection from "../Components/FirstSection";
import FourthSection from "../Components/FourthSection";
import Navbar from "../Components/Navbar";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
//STYLED COMPONENTS
const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 7207px;
  background-color: #f0f0f0;
`;
const Home = () => {
  return (
    <Container>
      <AlertBar />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Container>
  );
};

export default Home;
