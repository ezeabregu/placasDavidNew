import styled from "styled-components";
import { theme } from "../styles/theme";

export const FooterContainer = styled.footer`
  height: 50px;
  background-color: ${theme.colors.primary};
  color: white;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
