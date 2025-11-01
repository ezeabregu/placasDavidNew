import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductsWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: auto;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.fonts.header};
  color: ${theme.colors.text};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductsContainter = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductsCard = styled.div`
  background-color: ${theme.colors.background};
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 250px;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: ${theme.colors.textSecondary};
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    width: 150px;
    text-align: left;

    img {
      height: 150px;
    }

    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
