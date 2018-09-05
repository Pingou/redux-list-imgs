import React, { Component } from "react";

import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	Image
} from "react-native";

class ImgThumbnail extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={() => this.props.onPress()}
			>
				<Image
					resizeMode="cover"
					style={styles.canvas}
					source={{ uri: this.props.url }}
				/>
			</TouchableOpacity>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		position: "relative",
		width: "100%",
		height: 120
	},
	canvas: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

export default ImgThumbnail;
