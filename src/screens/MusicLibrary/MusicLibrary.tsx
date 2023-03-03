import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";

const FAKE_LIST = [
  {
    id: 1,
    title: "Best Rock Songs",
    song: 20,
  },
];

const RecentPlayList = () => {
  return (
    <>
      <Text style={styles.subHeading}>Library</Text>
      <View style={styles.section}>
        <Text style={styles.containerHeading}>Playlists</Text>
        <FlatList
          data={FAKE_LIST}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginHorizontal: -20, paddingHorizontal: 20 }}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <PlayList />}
        />
      </View>
      <Text style={styles.containerHeading}>Popular</Text>
    </>
  );
};
export const MusicLibrary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <FlatList
          style={{
            marginHorizontal: -20,
            paddingHorizontal: 20,
          }}
          ListHeaderComponent={RecentPlayList}
          data={[0, 0, 0, 0, 0, 0, 0, 0]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <SongItem />}
        />
      </View>
    </SafeAreaView>
  );
};

const PlayList = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("PlayListSong")}
      style={styles.playlistContainer}
    >
      <Animated.Image
        sharedTransitionTag="playlistImage"
        style={styles.playListImage}
      />

      <View style={styles.playListTextContainer}>
        <Animated.Text
          sharedTransitionTag="songTitle"
          style={styles.playListTitle}
        >
          Best Rock Songs
        </Animated.Text>
        <Animated.Text style={styles.playListDescription}>
          20 songs
        </Animated.Text>
      </View>
    </Pressable>
  );
};

const SongItem = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("PlayListSong")}
      style={styles.songContainer}
    >
      <Image style={styles.songImage} />
      <View style={styles.songTextContainer}>
        <Text style={styles.songTitle}>Why don't to share it?</Text>
        <Text style={styles.songArtist}>Charlie Puth</Text>
      </View>
    </Pressable>
  );
};
