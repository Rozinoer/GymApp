import React from "react";
import { View, Text } from "react-native";

export const SplashScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red', fontSize: 36}}>GYM APP</Text>
      <Text style={{color: 'white', fontSize: 24}}>loading..</Text>
    </View>

  );
};
