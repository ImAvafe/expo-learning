import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type Props = {
	imgSource: ImageSourcePropType;
	selectedImg?: string;
};

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});

export default function ImageViewer({ imgSource, selectedImg }: Props) {
	const effectiveImgSource = selectedImg ? { uri: selectedImg } : imgSource;

	return <Image source={effectiveImgSource} style={styles.image} />;
}
