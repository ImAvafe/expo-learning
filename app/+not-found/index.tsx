import { Stack, Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		color: "#fff",
	},
	button: {
		fontSize: 18,
		textDecorationLine: "underline",
		color: "#fff",
	},
});

export default function NotFound() {
	return (
		<>
			<Stack.Screen options={{ title: "Not Found" }}></Stack.Screen>
			<View style={styles.container}>
				<Text style={styles.text}>
					Page not found. Would you like to{" "}
					<Link href="/" style={styles.button}>
						return
					</Link>{" "}
					to the home screen?
				</Text>
			</View>
		</>
	);
}
