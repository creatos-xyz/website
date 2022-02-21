import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import Button from "../Button";

type CardButton = {
  label: string;
  accent: "primary" | "dark" | "light";
  onClick: () => void;
};

interface Props {
  title: string;
  thumbnailUrl: string;
  description: string;
  buttons: CardButton[];
}

const Card: FC<Props> = ({
  title,
  thumbnailUrl,
  description,
  buttons,
}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {thumbnailUrl && <Thumbnail src={thumbnailUrl} />}
      <Description>{description}</Description>
      <Buttons>
        {buttons.map(
          ({ label, accent, onClick }: CardButton, index: number) => (
            <Button key={index} accent={accent} onClick={onClick}>
              {label}
            </Button>
          )
        )}
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 25px;
  width: 425px;
  border-radius: 20px;
  user-select: none;

  background-color: ${({ theme }) => theme.colors.layout.dark};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.family.title};
  font-size: ${({ theme }) => theme.size.large};
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.medium};
  }
`;

const Thumbnail = styled.img`
  margin-top: 20px;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 10px;
  }
`;

const Description = styled(ReactMarkdown)`
  margin-top: 20px;
  text-align: justify;
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.text.light};

  h1 {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  h2 {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  ul {
    li {
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }

      &::before {
        content: "-";
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  br {
    content: " ";
    display: block;
    margin: 20px 0;
  }

  a {
    text-decoration: underline;
  }

  b,
  strong {
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.text.lighter};
  }

  i,
  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  figure figcaption {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.light};
    font-size: ${({ theme }) => theme.size.small};
  }

  img {
    max-width: 100%;
    max-height: 500px;
    border-radius: 10px;
    object-fit: cover;
    user-select: none;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      max-height: 300px;
    }
  }

  p {
    margin-top: 10px;

    &:first-child {
      margin: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 10px;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 10px;
  }
`;

export type { CardButton };
export default Card;
