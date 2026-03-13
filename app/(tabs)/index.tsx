import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

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
});

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
			<Link href="/about" style={styles.button}>
				Visit About
			</Link>
		</View>
	);
}
