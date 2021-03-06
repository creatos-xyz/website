import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  accent: "primary" | "dark" | "light";
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

const Button: FC<Props> = ({ accent, onClick, className, children }: Props) => {
  return (
    <Container accent={accent} onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ accent: string }>`
  min-height: 50px;
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.family.title};
  font-size: ${({ theme }) => theme.size.medium};
  transition: all 0.2s ease-in-out;

  background-color: ${({ theme, accent }) => {
    switch (accent) {
      case "primary":
        return theme.colors.accent.light;
      case "dark":
        return theme.colors.layout.dark;
      case "light":
        return theme.colors.layout.lightest;
    }
  }};
  color: ${({ theme, accent }) => {
    switch (accent) {
      case "light":
        return theme.colors.text.darkest;
      default:
        return theme.colors.text.lightest;
    }
  }};

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.normal};
  }
`;

export default Button;
