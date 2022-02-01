import React, { useState } from "react";
import { MainLayout } from "./src/MainLayout";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./src/init";
import { SplashScreen } from "./src/screens/EnterScreens/SplashScreen";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={init}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}
