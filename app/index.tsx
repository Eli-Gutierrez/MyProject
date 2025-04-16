import { SafeAreaView, TextInput, StyleSheet, useColorScheme, View } from "react-native";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CusttomButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { TouchableOpacity, Text } from "react-native";

async function myAlert(message: string) {
  Alert.alert(message);
}
export default function App() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f0f0f0' }]}>
      <View style={[styles.form, { backgroundColor: isDark ? '#2c2c2e' : '#fff', borderColor: isDark ? '#444' : '#ccc' }]}>
        <CustomText>Inicio de sesión</CustomText>
        <CustomText>Nombre de usuario:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={nombre}
          onChangeText={setNombre}
        />

        <CustomText>Contraseña:</CustomText>   
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />

        {/* Links centrados */}
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.link}>¿No tiene una cuenta?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>¿Olvidó su contraseña?</Text>
          </TouchableOpacity>
        </View>

        {/* Botón centrado */}
        <View style={{ alignItems: 'center' }}>
          <CustomButton onPress={() => {
            if (!nombre) return myAlert("Escribe tu nombre");
            myAlert(`Hola ${nombre}`);
          }}>
            Confirmar
          </CustomButton>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  form: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 10,
  },
  options: {
    marginBottom: 16,
    alignItems: 'center',
  },
  link: {
    color: "#3366FF",
    fontSize: 13,
    marginBottom: 4,
    textAlign: 'center',
  },
});
