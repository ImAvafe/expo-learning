import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type Props = {
	imgSource: ImageSourcePropType;
};

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});

export default function ImageViewer(props: Props) {
	return <Image source={props.imgSource} style={styles.image} />;
}
