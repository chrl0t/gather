import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ForageScreen from "./src/screens/ForageScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import SavedForagesScreen from "./src/screens/SavedForagesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Forage: ForageScreen,
    Recipes: RecipesScreen,
    Saved: SavedForagesScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Gather"
    }
  }
);

export default createAppContainer(navigator);
