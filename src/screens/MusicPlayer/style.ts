import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  infoText: {
    color: Colors.redVelvat,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: 30,
    marginTop: 40,
  },
  container: {
    flex: 1,
    padding: 25,
  },
  image: {
    width: width - 50,
    height: width - 100,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginHorizontal: "auto",
    alignSelf: "center",
    shadowColor: "gray",
    shadowOpacity: 1,
    shadowRadius: 100,
    shadowOffset: {
      width: 200,
      height: 200,
    },
  },

  textContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.redVelvat,
    marginTop: 2,
  },

  controlContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
