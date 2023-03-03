import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: -20,
    paddingHorizontal: 40,
  },
  subHeading: {
    fontSize: 34,
    fontWeight: "500",
    color: Colors.blueDark,
  },
  containerHeading: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.blueDark,
    marginVertical: 10,
  },
  playlistContainer: {
    flexDirection: "column",
    // Todo: upgrade to 0.71 to use gap
    marginRight: 20,
  },
  playListTextContainer: {
    flexDirection: "column",
    rowGap: 5,
    marginTop: 15,
  },
  playListTitle: {
    fontSize: 18,
    color: Colors.blueDark,
    fontWeight: "500",
  },
  playListDescription: {
    fontSize: 14,
    color: Colors.blueDark,
  },
  playListImage: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: Colors.primary,
  },
  section: {
    marginVertical: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  songContainer: { flexDirection: "row", marginVertical: 10 },
  songImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  songTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 15,
  },
  songTitle: { fontSize: 20, fontWeight: "400" },
  songArtist: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 2,
    color: Colors.redVelvat,
  },

  playerContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: "#dedede",
    position: "absolute",
    bottom: 20,
    left: 20,
    width: width,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    alignItems: "center",
  },
  playerImage: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
});
