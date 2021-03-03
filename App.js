import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { useFonts, Caveat } from "@expo-google-fonts/inter";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Gather"
    }
  }
);

export default createAppContainer(navigator);
