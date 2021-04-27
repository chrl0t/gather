import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ForageScreen from "./src/screens/ForageScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import MapScreen from "./src/screens/MapScreen";
import SavedScreen from "./src/screens/SavedScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Forage: ForageScreen,
    Recipes: RecipesScreen,
    Map: MapScreen,
    Saved: SavedScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Gather"
    }
  }
);

export default createAppContainer(navigator);
