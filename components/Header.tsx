import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function Header() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[
      styles.header,
      { backgroundColor: isDark ? '#1c1c1e' : '#e0e0e0' }
    ]}>
      <Text style={[
        styles.headerText,
        { color: isDark ? '#fff' : '#000' }
      ]}>
    
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // asegura que esté al frente
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
