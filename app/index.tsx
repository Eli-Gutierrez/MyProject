import { SafeAreaView, TextInput, StyleSheet, useColorScheme, View } from "react-native";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CusttomButton";
import TitleText from "@/components/TitleText";
import LinkText from "@/components/LinkTitle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native"; 
import FooterText from "@/components/FooterText";
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
        <TitleText>Inicio de sesión</TitleText>
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
       <LinkText onPress={() => console.log('Presionado')}>
  ¿No tiene una cuenta?
</LinkText>

<LinkText onPress={() => console.log('Presionado')}>
  ¿Olvido su contraseña? 
</LinkText>

        <View style={{ alignItems: 'center' }}>
          <CustomButton onPress={() => {
            if (!nombre) return myAlert("Escribe tu nombre");
            myAlert(`Hola ${nombre}`);
          }}>
            Confirmar
          </CustomButton>
        </View>
      </View>
      <FooterText></FooterText>
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
});