import { NativeBaseProvider, StatusBar, VStack } from "native-base";
import React, { useCallback, useEffect, useState } from "react";

import THEME from "./src/design/athena";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "./src/hooks";
import { Routes } from "./src/routes";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const isFontsLoaded = useFonts();

  useEffect(() => {
    if (isFontsLoaded) {
      setAppIsReady(true);
    }
  }, [isFontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <VStack flex={1} onLayout={onLayoutRootView}>
        <Routes />
      </VStack>
    </NativeBaseProvider>
  );
}
