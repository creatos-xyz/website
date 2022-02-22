import { useRouter } from "next/router";
import React, { FC } from "react";
import { Popper } from "react-popper";
import styled from "styled-components";
import Icon from "../Icon";
import Link from "../Link";

type SidebarLink = {
  href?: string;
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  icon: string;
};

interface Props {
  links: SidebarLink[];
}

const Sidebar: FC<Props> = ({ links }: Props) => {
  const { pathname } = useRouter();

  const isActive = (href: string): boolean => {
    return pathname.endsWith(href);
  };

  return (
    <Container>
      <Nav>
        <NavLinksList>
          <SpecialNavLink href={"/"} active={isActive("/")}>
            <NavLinkIcon type={"ri-vip-crown-fill"} />
          </SpecialNavLink>
          <Separator />
          {links.map((link: SidebarLink, index: number) => (
            <NavLinkItem key={index}>
              {link.href ? (
                <NavLink
                  href={link.href}
                  disabled={link.disabled}
                  active={isActive(link.href)}
                >
                  <NavLinkIcon type={link.icon} />
                </NavLink>
              ) : (
                <NavLink
                  as={"button"}
                  onClick={link.onClick}
                  disabled={link.disabled}
                >
                  <NavLinkIcon type={link.icon} />
                </NavLink>
              )}
            </NavLinkItem>
          ))}
        </NavLinksList>
        <ProfileSection>
          <ProfilePicture src={"/images/creatos.gif"} />
          <ProfileStatus type={"online"} />
        </ProfileSection>
      </Nav>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
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
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 14px 0;
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
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: none;
  }
`;

const NavLink = styled(Link)<{ disabled?: boolean; active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${({ theme, disabled, active = false }) =>
    active
      ? `
    border-radius: 15px;
    background-color: ${theme.colors.accent.green};
    color: ${theme.colors.layout.lightest};

    svg {
      transition: all 0.2s ease-in-out;
      fill: ${theme.colors.layout.lightest};
    }
  `
      : `
    background-color: ${theme.colors.layout.light};
    color: ${theme.colors.accent.green};

    svg {
      transition: all 0.2s ease-in-out;
      fill: ${theme.colors.accent.green};
    }
    
    ${
      !disabled
        ? `
      &:hover {
        border-radius: 15px;
        background-color: ${theme.colors.accent.green};
        color: ${theme.colors.layout.lightest};

        svg {
          transition: all 0.2s ease-in-out;
          fill: ${theme.colors.layout.lightest};
        }
      }
    `
        : `
      &:hover {
        color: ${theme.colors.accent.green};

        svg {
          fill: ${theme.colors.accent.green};
        }
      }
    `
    }
  `};

  ${({ disabled, theme }) =>
    disabled &&
    `
    cursor: default;
    background-color: ${theme.colors.layout.darkest};
  `}
`;

const SpecialNavLink = styled(NavLink)<{ active?: boolean }>`
  margin-top: 0;

  ${({ active = false }) =>
    active &&
    `
    border-radius: 15px;

    &:hover {
      border-radius: 15px;
    }
  `};

  background-color: ${({ theme }) => theme.colors.accent.light};
  color: ${({ theme }) => theme.colors.layout.lightest};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.light};
    color: ${({ theme }) => theme.colors.layout.lightest};
  }
`;

const Separator = styled.div`
  margin: 10px 0;
  width: 35px;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
`;

const NavLinkIcon = styled(Icon)`
  display: flex;
  font-size: 25px;
`;

const NavLinkLabel = styled.div`
  position: absolute;
  left: 55px;
  font-size: 1rem;

  background-color: ${({ theme }) => theme.colors.accent.green};
  color: ${({ theme }) => theme.colors.text.lightest};
`;

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  width: 50px;
  height: 50px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const ProfileStatus = styled.span<{ type: "online" | "do-not-disturb" }>`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.layout.darker};
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "online":
        return theme.colors.accent.green;
      default:
        return theme.colors.accent.green;
    }
  }};
`;

export type { SidebarLink };
export default Sidebar;
