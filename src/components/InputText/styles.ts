import { PixelRatio, StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    width: "100%"
  },
  TextInput: {
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    color: "#eee",
    backgroundColor: "#36363C",
    borderRadius: 10,
    paddingHorizontal: 20
  },
  Label: {
    color: "#eee",
    marginBottom: 8
  }
});
