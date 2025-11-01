import styled from "styled-components";
import { theme } from "../styles/theme";

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: ${theme.colors.background};
  background-image: url("/assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${theme.colors.text};
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    height: 50%;

    img {
      width: 350px;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.header};
  font-size: 3rem;
  color: ${theme.colors.primary};
`;

export const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.5rem;
  margin-top: 1rem;
`;
