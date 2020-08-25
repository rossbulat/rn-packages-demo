import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    height: 47,
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
  buttonText: {
    fontWeight: "700",
    paddingHorizontal: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  touchable: {
    alignItems: "center",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
});

export default styles;
