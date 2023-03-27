import EndDayScreen from "@/components/endDayScreen";
import { GameStateProvider } from "@/components/gameStateContext";
import PlayScreen from "@/components/playScreen";
import StartScreen from "@/components/startScreen";
import Head from "next/head";

// Styled Components
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
        <PlayScreen />
        <StartScreen />
        <EndDayScreen />
      </GameStateProvider>
    </>
  );
}
