import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
export const PlayListSong = ({ route }: any) => {
  return (
    // <AnimatedSafeAreaView style={{ flex: 1 }}>
    <View style={styles.headerContainer}>
      <Animated.Image
        sharedTransitionTag={route.params.sharedTransitionTag}
        style={styles.headerImage}
      />

      <Animated.Text sharedTransitionTag="songTitle" style={styles.headerTitle}>
        Best Rock Songs
      </Animated.Text>
      <Text style={styles.headerSubTitle}>Party</Text>
    </View>
    // </AnimatedSafeAreaView>
  );
};
