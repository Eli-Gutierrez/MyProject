import React from 'react';
import { Text, TextProps, StyleSheet, useColorScheme } from 'react-native';

export default function LinkText(props: TextProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Text
      {...props}
      style={[
        styles.link,
        { color: isDarkMode ? '#FFA500' : '#001363' }, // Naranja o azul
        props.style // Permite estilos personalizados desde afuera
      ]}
    />
  );
}

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
