import React from "react";
import { View, Text } from "react-native";
import { THEME } from "../../theme";

export const SplashScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: THEME.BACKGROUND, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: THEME.HEADLINE_TEXT, fontSize: 36}}>RuFit+</Text>
      <Text style={{color: THEME.PARAGRAPH, fontSize: 24}}>loading..</Text>
    </View>

  );
};
