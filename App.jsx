import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Cat from "./src/components/Cat"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 32, fontWeight: 700, textAlign: "center" }}>
        The cat is sad. Would you pet it?
      </Text>
      <Cat />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default App
