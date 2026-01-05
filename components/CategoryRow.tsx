import { View, Text, FlatList } from "react-native";
import AnimeCard from "./AnimeCard";

export default function CategoryRow({ title, data }: any) {
  return (
    <View>
      <Text style={{ color: "#fff", fontSize: 18, marginLeft: 8 }}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <AnimeCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}