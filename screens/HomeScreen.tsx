import { View, FlatList, Image, Dimensions } from "react-native"; import { useEffect, useState } from "react"; import { getPopularAnime } from "../services/anilist"; import AnimeCard from "../components/AnimeCard"; import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

export default function HomeScreen() { const [anime, setAnime] = useState<any[]>([]); const navigation = useNavigation<any>();

useEffect(() => { getPopularAnime().then(setAnime); }, []);

if (!anime.length) return null;

return ( <View> <Image source={{ uri: anime[0].bannerImage }} style={{ width, height: 220 }} /> <FlatList data={anime} horizontal renderItem={({ item }) => ( <AnimeCard item={item} navigation={navigation} /> )} keyExtractor={(item) => item.id.toString()} /> </View> ); }
