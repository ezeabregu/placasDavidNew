import styled from "styled-components";
import { theme } from "../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  margin: 0 1rem;
  color: white;
  font-family: ${theme.fonts.header};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const LogoImage = styled.img`
  width: 50px;

  @media (max-width: 768px) {
    width: 25px;
    margin-bottom: 20px;
  }
`;
