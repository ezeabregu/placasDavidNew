import styled from "styled-components";
import { theme } from "../styles/theme";

export const ImageGridContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  text-align: center;
  overflow: visible;
  height: auto;
`;

export const GridContainer = styled.section`
  column-count: 5;
  column-gap: 1rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 480px) {
    column-count: 2;
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 12px;
  display: block;
  break-inside: avoid;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: 2rem;
  margin-bottom: 1rem;
`;
