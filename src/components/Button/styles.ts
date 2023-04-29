import { PixelRatio, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#571d73",
    width: "100%",
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#eee"
  }
});
