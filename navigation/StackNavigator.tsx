import { createNativeStackNavigator } from "@react-navigation/native-stack"; import TabNavigator from "./TabNavigator"; import DetailsScreen from "../screens/DetailsScreen"; import PlayerScreen from "../screens/PlayerScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() { return ( <Stack.Navigator screenOptions={{ headerShown: false }}> <Stack.Screen name="Tabs" component={TabNavigator} /> <Stack.Screen name="Details" component={DetailsScreen} /> <Stack.Screen name="Player" component={PlayerScreen} /> </Stack.Navigator> ); }
