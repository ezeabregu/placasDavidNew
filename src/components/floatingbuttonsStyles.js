import styled from "styled-components";
import { theme } from "../styles/theme";

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  z-index: 9999;
`;

export const FloatingButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === "small" ? "45px" : "55px")};
  height: ${(props) => (props.size === "small" ? "45px" : "55px")};
  background-color: ${(props) => props.bg || theme.colors.primary};
  color: white;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.hover || theme.colors.accent};
  }
`;
