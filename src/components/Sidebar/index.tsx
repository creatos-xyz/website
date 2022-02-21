import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import Link from "../Link";

type SidebarLink = {
  href: string;
  label: string;
  icon: string;
};

interface Props {
  links: SidebarLink[];
}

const Sidebar: FC<Props> = ({ links }: Props) => {
  const { pathname } = useRouter();

  const isActive = (href: string): boolean => {
    return pathname.startsWith(href);
  };

  return (
    <Container>
      <Nav>
        <NavLinksList>
          <SpecialNavLink href={"/"} active={isActive("/")}>
            <NavLinkIcon className={"ri-home-line"} />
          </SpecialNavLink>
          <Separator />
          {links.map((link) => (
            <NavLinkItem key={link.href}>
              <NavLink href={link.href} active={isActive(link.href)}>
                <NavLinkIcon className={link.icon} />
              </NavLink>
            </NavLinkItem>
          ))}
        </NavLinksList>
      </Nav>
    </Container>
  );
};

const Container = styled.aside`
  width: 75px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darker};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 14px;
`;

const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  list-style: none;
`;

const NavLinkItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: none;
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  background-color: ${({ theme }) => theme.colors.layout.light};
  color: ${({ theme, active = false }) =>
    active ? theme.colors.accent.green : theme.colors.layout.lightest};

  &:hover {
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.accent.green};
    color: ${({ theme }) => theme.colors.layout.lightest};
  }

  &:active {
  }
`;

const SpecialNavLink = styled(NavLink)<{ active?: boolean }>`
  margin-top: 0;

  ${({ theme, active = false }) =>
    active
      ? `
    border-radius: 15px;
    background-color: ${theme.colors.accent.light};
    color: ${theme.colors.layout.lightest};

    &:hover {
      border-radius: 15px;
      background-color: ${theme.colors.accent.light};
      color: ${theme.colors.layout.lightest};
    }
  `
      : `
    background-color: ${theme.colors.layout.light};
    color: ${theme.colors.accent.green};
  `};
`;

const Separator = styled.div`
  margin: 10px 0;
  width: 35px;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
`;

const NavLinkIcon = styled.i``;

const NavLinkLabel = styled.div`
  font-size: 1rem;

  background-color: ${({ theme }) => theme.colors.accent.green};
  color: ${({ theme }) => theme.colors.text.lightest};
`;

export type { SidebarLink };
export default Sidebar;
