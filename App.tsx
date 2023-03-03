import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MusicLibrary } from "./src/screens/MusicLibrary/MusicLibrary";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlayListSong } from "./src/screens/PlaylistSong/PlayListSong";
import { MusicPlayer } from "./src/screens/MusicPlayer/MusicPlayer";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Library" component={MusicLibrary} />
        <Stack.Screen
          //options={{ presentation: "modal" }}
          name="MusicPlayer"
          component={MusicPlayer}
        />
        <Stack.Screen name="PlayListSong" component={PlayListSong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
