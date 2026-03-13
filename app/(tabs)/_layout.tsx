import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#6767FF",
				headerStyle: {
					backgroundColor: "#25292e",
				},
				headerShadowVisible: false,
				headerTintColor: "#fff",
				tabBarStyle: {
					backgroundColor: "#22262c",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="about/index"
				options={{
					title: "About",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={
								focused ? "information-circle" : "information-circle-outline"
							}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
