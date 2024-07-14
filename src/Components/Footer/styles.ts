import styled from "styled-components";

export const Container = styled.footer`
  background-color: black;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px; 
`;

export const SocialIcon = styled.div<{ hoverColor: string }>`
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  svg {
    font-size: 36px; 
  }
`;

export const Copyright = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
`;
