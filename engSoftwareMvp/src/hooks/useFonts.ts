import {
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  useFonts as robotoUseFonts,
} from "@expo-google-fonts/roboto";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
  useFonts as openSansUseFonts,
} from "@expo-google-fonts/open-sans";

function useFonts() {
  const [isRobotoLoaded] = robotoUseFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
  });
  const [isOpenSansLoaded] = openSansUseFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
  });

  return isRobotoLoaded && isOpenSansLoaded;
}

export default useFonts;
