import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Banner({ item }: any) {
  const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => navigation.navigate("Details", { item })}>
      <Image
        source={{ uri: item.banner }}
        style={{ width: "100%", height: 220 }}
      />
    </Pressable>
  );
}