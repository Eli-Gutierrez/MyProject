import React from 'react';
import { Text, StyleSheet, useColorScheme, View } from 'react-native';

export default function FooterText() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: isDark ? '#aaa' : '#444' }]}>
        Todos los derechos reservados a la asociación @Ctrl+QR|2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
