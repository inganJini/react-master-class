import Router from "./Router";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor}; 
`;
const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function Root() {
  return (
      <div>
          <Container>
              <H1>Protected</H1>
              <Header />,
              <Outlet />
          </Container>
      </div>
  );
}

export default Root;
