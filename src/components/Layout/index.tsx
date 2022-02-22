import { DISCORD_INVITE_URL } from "@src/constants/main";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Sidebar, { SidebarLink } from "../Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  const links: SidebarLink[] = [
    {
      href: DISCORD_INVITE_URL,
      label: "Join our Discord",
      icon: "discord-logo",
    },
    {
      href: "https://twitter.com/creatos_xyz",
      label: "Join our Twitter",
      icon: "ri-twitter-fill",
    },
    {
      onClick: () => {
        navigator.clipboard.writeText("https://www.creatos.xyz/");
      },
      label: "Share the website",
      icon: "ri-links-line",
    },
    {
      href: DISCORD_INVITE_URL,
      label: "Order your server",
      icon: "ri-add-fill",
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
  height: 100%;
`;

export default Layout;
