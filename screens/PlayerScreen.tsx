import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";

export default function PlayerScreen() {
  const route = useRoute<any>();
  const { title, episode } = route.params;

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const url = `https://aniwatch.to/watch/${slug}-episode-${episode}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        allowsFullscreenVideo
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});