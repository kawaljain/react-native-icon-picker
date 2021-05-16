import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  content: {
    flexDirection: "column",
    backgroundColor: "#fff",
    maxHeight: "50%",
    borderRadius: 5,
    width: "80%"
  },
  modalHeader: {
    flexDirection: "column",
    borderBottomWidth: 2,
    padding: 10
  },
  modalHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center"
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700"
  },
  modalContent: {
    padding: 10
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    alignItems: "center"
    // justifyContent: "space-evenly"
  },

  item: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center"
  }
});
