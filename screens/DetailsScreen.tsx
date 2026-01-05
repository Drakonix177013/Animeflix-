import { View, Text, Pressable, FlatList } from "react-native"; import { useRoute, useNavigation } from "@react-navigation/native";

export default function DetailsScreen() { const route = useRoute<any>(); const navigation = useNavigation<any>(); const { anime } = route.params;

return ( <View> <Text style={{ fontSize: 20 }}>{anime.title.romaji}</Text> <FlatList data={Array.from({ length: anime.episodes || 12 })} keyExtractor={(_, i) => i.toString()} renderItem={({ index }) => ( <Pressable onPress={() => navigation.navigate("Player", { title: anime.title.romaji, episode: index + 1, }) } > <Text>Episode {index + 1}</Text> </Pressable> )} /> </View> ); }