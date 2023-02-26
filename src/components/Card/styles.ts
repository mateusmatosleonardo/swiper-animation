import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    borderRadius: 8,
  },
  wrapperInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "red",
  },
  textName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fafafa",
  },
  age: {
    fontSize: 24,
    color: "#fafafa",
    paddingHorizontal: 12,
  },
  boxIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  wrapperIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
  },
});
