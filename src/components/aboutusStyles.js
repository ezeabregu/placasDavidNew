import styled from "styled-components";
import { theme } from "../styles/theme";

export const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.colors.background};
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.fonts.header};
  color: ${theme.colors.text};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageItem = styled.img`
  width: 450px;
  margin-top: 1rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 700px;
  text-align: left;
  font-size: 1.3rem;
  font-family: ${theme.fonts.body};
  text-decoration: none;
  list-style: none;

  li {
    background-color: ${theme.colors.secondary};
    margin: 5px;
    border-radius: 5px;
    padding: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;
