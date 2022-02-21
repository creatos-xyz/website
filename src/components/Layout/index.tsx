import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Sidebar, { SidebarLink } from "../Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  const links: SidebarLink[] = [
    {
      href: "/",
      label: "Join our Discord",
      icon: "ri-home-line",
    },
    {
      href: "/",
      label: "Join our Twitter",
      icon: "ri-home-line",
    },
    {
      href: "/",
      label: "Share the website",
      icon: "ri-home-line",
    },
    {
      href: "/",
      label: "Order your server",
      icon: "ri-home-line",
    },
  ];

  return (
    <Container>
      <Sidebar links={links} />
      {children}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export default Layout;
