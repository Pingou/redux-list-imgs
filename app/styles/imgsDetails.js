import ReactNative from "react-native";

const { StyleSheet } = ReactNative;

export default StyleSheet.create({
	container: {
		flex: 1
	},

	commentContainer: {
		flexDirection: "row",
		alignItems: "center"
	},

	textInput: {
		flex: 1,
		height: 100,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		padding: 5
	}
});
