import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; import HomeScreen from "../screens/HomeScreen"; import AnimeScreen from "../screens/AnimeScreen"; import MovieScreen from "../screens/MovieScreen"; import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() { return ( <Tab.Navigator screenOptions={{ headerShown: false }}> <Tab.Screen name="Home" component={HomeScreen} /> <Tab.Screen name="Anime" component={AnimeScreen} /> <Tab.Screen name="Movies" component={MovieScreen} /> <Tab.Screen name="Search" component={SearchScreen} /> </Tab.Navigator> ); }
