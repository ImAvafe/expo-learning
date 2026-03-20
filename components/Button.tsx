import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export type Props = {
	label: string;
	style?: "secondary" | "primary";
	onPress?: () => void;
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 8,
	},
	label: {
		color: "#fff",
		fontSize: 16,
	},
});

export default function Button({ label, style, onPress }: Props) {
	return (
		<View
			style={[
				styles.buttonContainer,
				style === "primary" && {
					borderWidth: 4,
					borderColor: "#ffd33d",
					borderRadius: 18,
				},
			]}
		>
			<Pressable
				style={[
					styles.button,
					style === "primary" && { backgroundColor: "#fff" },
				]}
				onPress={onPress}
			>
				<FontAwesome name="picture-o" size={18} color="#25292e" />
				<Text
					style={[
						styles.label,
						style === "primary" && {
							color: "#25292e",
						},
					]}
				>
					{label}
				</Text>
			</Pressable>
		</View>
	);
}
