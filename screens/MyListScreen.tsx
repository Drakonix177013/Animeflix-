import { View, Text, StyleSheet } from "react-native";

export default function MyListScreen() {
  return (
      <View style={styles.container}>
            <Text style={styles.text}>My List (Netflix style)</Text>
                </View>
                  );
                  }

                  const styles = StyleSheet.create({
                    container: { flex: 1, backgroundColor: "#000", justifyContent: "center" },
                      text: { color: "#fff", textAlign: "center", fontSize: 18 },
                      });