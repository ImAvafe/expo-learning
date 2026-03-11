import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
});

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}
