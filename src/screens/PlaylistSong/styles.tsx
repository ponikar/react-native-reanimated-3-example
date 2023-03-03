import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  headerImage: {
    width: width * 0.65,
    height: width * 0.65,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: Colors.primary,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: Colors.blueDark,
    marginTop: 10,
  },
  headerSubTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.redVelvat,
    marginTop: 5,
  },
});
