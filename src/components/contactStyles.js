import styled from "styled-components";
import { theme } from "../styles/theme";

export const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;

export const ContactInfo = styled.div`
  max-width: 400px;
`;

export const ContactTitle = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem 0;
  font-family: ${theme.fonts.body};

  svg {
    color: ${theme.colors.primary};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${theme.colors.primary};
    font-size: 1.8rem;
    transition: 0.3s;
    &:hover {
      color: ${theme.colors.accent};
      transform: scale(1.1);
    }
  }
`;

export const MapContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
