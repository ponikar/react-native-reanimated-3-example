import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/color";
import { styles } from "./style";

const FAKE_LIST = [
  {
    id: 1,
    title: "Best Rock Songs",
    song: 20,
  },
  {
    id: 2,
    title: "Best Rock Songs",
    song: 20,
  },
  {
    id: 3,
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
          renderItem={({ item, index }) => <PlayList index={index} />}
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
          renderItem={({ item, index }) => <SongItem index={index} />}
        />
      </View>
      <MusicPlayer />
    </SafeAreaView>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedEntypo = Animated.createAnimatedComponent(Entypo);
const MusicPlayer = () => {
  const navigation = useNavigation();
  return (
    <AnimatedPressable
      sharedTransitionTag="player-container"
      style={styles.playerContainer}
      onPress={() => navigation.navigate("MusicPlayer")}
    >
      <Animated.Image
        sharedTransitionTag="player-image"
        style={styles.playerImage}
        source={require("../../assets/images/fake-album.jpeg")}
      />

      <AnimatedEntypo
        sharedTransitionTag="player-play"
        name="controller-play"
        size={45}
        color={Colors.redVelvat}
      />
    </AnimatedPressable>
  );
};

const PlayList: FC<{ index: number }> = ({ index }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("PlayListSong", {
          sharedTransitionTag: `playlist-image-${index}`,
        })
      }
      style={styles.playlistContainer}
    >
      <Animated.Image
        sharedTransitionTag={`playlist-image-${index}`}
        style={styles.playListImage}
      />

      <View style={styles.playListTextContainer}>
        <Animated.Text
          //  sharedTransitionTag="songTitle"
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

const SongItem = ({ index }: { index: number }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("PlayListSong", {
          sharedTransitionTag: `song-image-${index}`,
        })
      }
      style={styles.songContainer}
    >
      <Animated.Image
        sharedTransitionTag={`song-image-${index}`}
        style={styles.songImage}
      />
      <View style={styles.songTextContainer}>
        <Text style={styles.songTitle}>Why don't to share it?</Text>
        <Text style={styles.songArtist}>Charlie Puth</Text>
      </View>
    </Pressable>
  );
};
