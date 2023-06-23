import { DrawerNavigationOptions } from "@react-navigation/drawer";
import THEME from "../../design/athena";

const drawerOptions = ({ route }) =>
  ({
    headerShown: false,
    drawerStyle: {
      backgroundColor: THEME.colors.gray[700],
    },
    drawerActiveBackgroundColor: THEME.colors.primary[500],
    drawerInactiveTintColor: THEME.colors.gray[300],
    drawerActiveTintColor: THEME.colors.gray[100],
    drawerLabelStyle: { marginLeft: -16 },
  } as DrawerNavigationOptions);

export default drawerOptions;
