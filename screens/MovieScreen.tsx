import { View, FlatList } from "react-native"; import { useEffect, useState } from "react"; import { getPopularAnime } from "../services/anilist"; import AnimeCard from "../components/AnimeCard"; import { useNavigation } from "@react-navigation/native";

export default function MovieScreen() { const [anime, setAnime] = useState<any[]>([]); const navigation = useNavigation<any>();

useEffect(() => { getPopularAnime().then(setAnime); }, []);

return ( <FlatList data={anime} numColumns={2} renderItem={({ item }) => ( <AnimeCard item={item} navigation={navigation} /> )} keyExtractor={(item) => item.id.toString()} /> ); }
