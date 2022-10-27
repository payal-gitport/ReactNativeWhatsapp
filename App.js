import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./source/navigation";
import ChatScreen from "./source/screens/ChatScreen";
import ChatsScreen from "./source/screens/ChatsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
