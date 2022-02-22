import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Head from "../Head";

interface Props {
  title: string;
  children: ReactNode;
}

const Page: FC<Props> = ({ title, children }: Props) => {
  return (
    <Container>
      <Head title={title} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 75px;
  padding: 0 7rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0 20px;
    margin: 0;
  }
`;

export default Page;
