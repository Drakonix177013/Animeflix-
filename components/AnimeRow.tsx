import { FlatList, Text, View } from "react-native";
import AnimeCard from "./AnimeCard";

export default function AnimeRow({ title, data }: any) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}>
        {title}
      </Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <AnimeCard item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}