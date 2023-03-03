import React from "react";
import { Image, View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { styles } from "./style";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/color";

const AnimatedEntypo = Animated.createAnimatedComponent(Entypo);
export const MusicPlayer = () => {
  return (
    <Animated.View
      sharedTransitionTag="player-container"
      style={styles.container}
    >
      <View>
        <Text style={styles.infoText}>Playing from Cassie's Playlist</Text>
      </View>
      <Animated.Image
        source={require("../../assets/images/fake-album.jpeg")}
        sharedTransitionTag="player-image"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Attention</Text>
        <Text style={styles.subTitle}>Charlie Puth</Text>
      </View>

      <View style={styles.controlContainer}>
        <AnimatedEntypo
          name="controller-play"
          sharedTransitionTag="player-play"
          size={55}
          color={Colors.redVelvat}
        />
      </View>
    </Animated.View>
  );
};
