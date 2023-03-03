import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MusicLibrary } from "./src/screens/MusicLibrary/MusicLibrary";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlayListSong } from "./src/screens/PlaylistSong/PlayListSong";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Library" component={MusicLibrary} />
        <Stack.Screen name="PlayListSong" component={PlayListSong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
