import Buttons from "@/components/buttons";
import Card from "@/components/card";
import { GameStateProvider } from "@/components/gameStateContext";
import StatusBar from "@/components/statusBar";
import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GameStateProvider>
        <Layout>
          <StatusBar />
          <Card />
          <Buttons />
        </Layout>
      </GameStateProvider>
    </>
  );
}
