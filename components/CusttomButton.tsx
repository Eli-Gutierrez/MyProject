import React from "react";
import { PropsWithChildren } from "react";
import { TouchableOpacity, StyleSheet, Text, useColorScheme } from "react-native";

export type CustomButtonProps = PropsWithChildren<{
  onPress?: () => void;
}>;
export default function CustomButton({ children, onPress }: CustomButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isDarkMode ? '#FFA500' : '#08f' } // Naranja en modo oscuro
      ]}
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.buttonText, { color: isDarkMode ? '#000' : '#fff' }]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});