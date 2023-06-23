import React from "react";
import { useTheme } from "native-base";
import { SafeAreaView, ViewProps } from "react-native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

export interface IScreenWrapperProps extends ViewProps {
  children: React.ReactNode;
  _gradient?: LinearGradientProps;
}

function ScreenWrapper({ children, _gradient, ...rest }: IScreenWrapperProps) {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={[
        colors.primary[700],
        colors.primary[500],
        colors.primary[300],
        colors.primary[100],
      ]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 1, y: 1.1 }}
      {..._gradient}
    >
      <SafeAreaView style={{ flex: 1 }} {...rest}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default ScreenWrapper;
