import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[
      styles.header,
      { backgroundColor: isDark ? '#1c1c1e' : '#e0e0e0' }
    ]}>
      <FontAwesome
        name="arrow-circle-left"
        size={24}
        color={isDark ? '#fff' : '#000'}
      />
      
      <Text style={[
        styles.headerText,
        { color: isDark ? '#fff' : '#000' }
      ]}>
        Bienvenido a TuApp
      </Text>

      <FontAwesome
        name="user"
        size={24}
        color={isDark ? '#fff' : '#000'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', // 👈 Distribuye entre los extremos
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
