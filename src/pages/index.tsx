import React from "react";

import { NextPage } from "next";
import Page from "@src/components/Page";
import styled from "styled-components";
import Card from "@src/components/Card";

const HomePage: NextPage = () => {
  return (
    <Page title={"Creatos"}>
      <Title>
        {"Choose from all of our services and order the best for you"}
      </Title>
      <Subtitle>{"We ensure quick delivery & profesional setup"}</Subtitle>
      <Content>
        <Illustration>
          <Image src={"/images/featured/persons.png"} alt={""} />
        </Illustration>
        <OrderCard
          title={"Discord Server"}
          thumbnailUrl={"/images/cards/order-card.png"}
          description={
            "In our package, you have the possibility to get your beautiful and unique discord server with a clean design, detailled channels, structurated messages and emojis to catch the eye of your members.\n\n**Want a discord bot? No worries, we'll take care of that too :**\n - Schedule your daily messages, your self-roles, your social media integrations and many other interesting features.\n\n**Do you want to leave on a stable community base?**\n - We can arrange to bring members to your server to attract even more people to you!\n\n**Do you want ongoing help managing your server?**\n - We are here for that, suggest us and we will intervene if you have a discord problem, additions with the bot etc...\n\nBriefly, we are here to do our possible to help you. We will do our best to provide you with **THE** server **YOU** want (it will be like in your dreams). Do you have mouth watering and overflowing desires? So quickly click on the button just below to contact us and explain your project!"
          }
          buttons={[
            {
              label: "Order now",
              accent: "primary",
              onClick: () => {
                console.log("clicked");
              },
            },
          ]}
        />
      </Content>
    </Page>
  );
};

const Title = styled.h1`
  margin-top: 50px;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.size.title};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 25px;
    font-size: ${({ theme }) => theme.size.normal};
  }
`;

const Subtitle = styled.h2`
  margin-top: 7px;
  font-weight: ${({ theme }) => theme.weight.regular};
  font-size: ${({ theme }) => theme.size.medium};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.small};
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const Illustration = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  width: 675px;
  object-fit: cover;
`;

const OrderCard = styled(Card)`
  flex: 1;
`;

export default HomePage;
