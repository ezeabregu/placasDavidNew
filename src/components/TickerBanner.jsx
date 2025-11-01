import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${theme.colors.primary || "#222"};
  color: ${theme.colors.text || "#fff"};
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 9999;
`;

const BannerContent = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 60s linear infinite; /* <- más lento */
`;

const Announcement = styled.span`
  margin-right: 3rem;
  font-weight: bold;
  white-space: nowrap;
`;

export const TickerBanner = ({ announcements = [] }) => {
  // duplicamos los anuncios para un loop infinito
  const repeatedAnnouncements = [...announcements, ...announcements];

  return (
    <BannerContainer>
      <BannerContent>
        {repeatedAnnouncements.map((text, index) => (
          <Announcement key={index}>{text}</Announcement>
        ))}
      </BannerContent>
    </BannerContainer>
  );
};
