import { View, Text, Pressable } from "react-native";

import { styles } from "./styles";

export const Chat = ({ user, navigation }) => {
  const userId = user.userId;
  const messageRef = user.messageRef;

  return (
    <Pressable
      style={styles.infoBlock}
      onPress={() =>
        navigation.navigate("DialogScreen", { userId, messageRef })
      }
    >
      <View style={styles.avatar}>
        <Text style={{ fontSize: 35 }}></Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>
          {user.name} {user.lastname}
        </Text>
      </View>
    </Pressable>
  );
};
