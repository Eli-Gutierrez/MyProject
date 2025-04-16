import React from 'react';
import { Text, TextProps, StyleSheet, useColorScheme } from 'react-native';

export default function TitleText(props: TextProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <Text
      {...props}
      style={[
        styles.title,
        { color: isDarkMode ? '#FFA500' : '#001363' }, // Naranja si está en oscuro
        props.style, // Si le pasas estilos desde fuera
      ]}
    />
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
