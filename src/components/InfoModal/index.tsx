import { DISCORD_INVITE_URL } from "@src/constants/main";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Icon from "../Icon";
import Link from "../Link";

interface Props {
  onClose: () => void;
}

const InfoModal: FC<Props> = ({ onClose }: Props) => {
  return (
    <Container>
      <Section>
        <SectionTitle>{"What is Creatos ?"}</SectionTitle>
        <SectionContent>
          <Text>
            <ReactMarkdown>
              Creatos is composed of 3 &quot;Discord technicians&quot; able to
              create as many channels as you want. Since they have no limits,
              the only limit will be your imagination! They are available every
              day to listen to you and answer your requests as soon as possible.
              Are you looking for a professional server to promote your project?
              With custom bots, a clean design and a fast creation?\n\n **You
              are at the right place!**
            </ReactMarkdown>
          </Text>
          <EmoteImage src={"/images/emotes/emote-1.png"} alt={""} />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{"How does it work ?"}</SectionTitle>
        <SectionContent>
          <Text>
            <ReactMarkdown>
              You can consult our different services and join our discord to
              give more details about your project. This way, we will be able to
              evaluate the work and propose an outstanding result!
            </ReactMarkdown>
          </Text>
          <EmoteImage src={"/images/emotes/emote-2.png"} alt={""} />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{"Do you provide good servers ?"}</SectionTitle>
        <SectionContent>
          <Text>
            <ReactMarkdown>
              Today, Discord is used by a ton of users. We strive to create
              servers that are up to date, with a high security system, a good
              level of moderation, a sophisticated design, automation with bots,
              support systems and anything else that makes users feel good on
              your server and stay for a long time!
            </ReactMarkdown>
          </Text>
          <EmoteImage src={"/images/emotes/emote-3.png"} alt={""} />
        </SectionContent>
      </Section>
      <Footer>
        {
          "Feel free to join our discord server to discuss your project with us!"
        }
        <Buttons>
          <Social>
            <SocialLink href={DISCORD_INVITE_URL}>
              <SocialIcon type={"discord-logo"} />
            </SocialLink>
            <SocialLink href={"/"}>
              <SocialIcon type={"ri-twitter-fill"} />
            </SocialLink>
          </Social>
          <CloseButton onClick={onClose}>
            <Icon type={"close"} />
          </CloseButton>
        </Buttons>
      </Footer>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  z-index: 100;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px 0 0 20px;
  overflow: scroll;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    padding: 20px;
    border-radius: 0;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: justify;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.layout.dark};
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.light};
  padding: 18px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
  }
`;

const Text = styled.p`
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
`;

const EmoteImage = styled.img`
  width: 75px;
  height: 75px;
  margin-left: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled(Link)`
  height: 50px
  width: 50px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.layout.lightest};
  color: ${({ theme }) => theme.colors.text.darker};

  &:hover {
    background-color: ${({ theme }) => theme.colors.layout.lighter};
    color: ${({ theme }) => theme.colors.text.darker};
  }
`;

const SocialIcon = styled(Icon)``;

const CloseButton = styled.div`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.layout.lightest};
  transition: fill 0.2s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.colors.layout.lighter};
  }
`;

export default InfoModal;
