import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  message?: string;
  error?: string | null;
  color?: string;
  className?: string;
};

const Loading: FC<Props> = ({ message, error, color, className }: Props) => {
  return (
    <Loader className={className}>
      <LoadingSvg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="24px"
        height="30px"
        viewBox="0 0 24 30"
        xmlSpace="preserve"
      >
        <Rectangle x="0" y="0" width="4" height="10" fill="#333" color={color}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </Rectangle>
        <Rectangle x="10" y="0" width="4" height="10" fill="#333" color={color}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </Rectangle>
        <Rectangle x="20" y="0" width="4" height="10" fill="#333" color={color}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </Rectangle>
      </LoadingSvg>

      {error ? <Error>{error}</Error> : message && <Message>{message}</Message>}
    </Loader>
  );
};

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;
`;

const LoadingSvg = styled.svg`
  enable-background: new 0 0 50 50;
`;

const Rectangle = styled.rect<{ color?: string }>`
  fill: ${({ color, theme }) => color || theme.colors.accent.light};
`;

const Message = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.size.tiny};
`;

const Error = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.accent.red};
  font-size: ${({ theme }) => theme.size.tiny};
`;

export default Loading;
