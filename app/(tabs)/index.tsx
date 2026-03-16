import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
		fontSize: 18,
	},
	button: {
		fontSize: 18,
		textDecorationLine: "underline",
		color: "#fff",
	},
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
	imageContainer: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1 / 3,
		alignItems: "center",
	},
});

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer imgSource={PlaceholderImage} />
			</View>
			<View style={styles.buttonContainer}>
				<Button label="Pick photo from gallery" style="primary" />
				<Button label="Use default photo" />
			</View>
		</View>
	);
}
