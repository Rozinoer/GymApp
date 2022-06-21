import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";
import {THEME} from '../../theme'
export const Message = ({ flag, text }) => {
  return (
      <View style={flag ? {...styles.wrapper,alignSelf: 'flex-end', borderColor: THEME.BUTTON} : {...styles.wrapper,alignSelf: 'flex-start'}}>
        <Text style={styles.color}>{text}</Text>
      </View>

  );
};
