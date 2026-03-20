import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

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
	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		undefined,
	);

	const pickImageAsync = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
		} else {
			alert("You didn't select an image!");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer imgSource={PlaceholderImage} selectedImg={selectedImage} />
			</View>
			<View style={styles.buttonContainer}>
				<Button
					label="Pick photo from gallery"
					style="primary"
					onPress={pickImageAsync}
				/>
				<Button label="Use default photo" />
			</View>
		</View>
	);
}
