import { Pressable, Image, Text } from "react-native";

export default function AnimeCard({ item, navigation }: any) { return ( <Pressable style={{ margin: 10 }} onPress={() => navigation.navigate("Details", { anime: item })} > <Image source={{ uri: item.coverImage.large }} style={{ width: 120, height: 170 }} /> <Text numberOfLines={1}>{item.title.romaji}</Text> </Pressable> ); }