import "remixicon/fonts/remixicon.css";
import React from "react";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import NextProgress from "next-progress";

import themes from "@src/services/themes";
import Head from "@src/components/Head";
import MainStyle from "../styles/main";
import Layout from "@src/components/Layout";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const theme = themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Head description={"creatos"} />
      <MainStyle />
      <NextProgress
        delay={100}
        color={theme.colors.accent.light}
        options={{
          showSpinner: false,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
