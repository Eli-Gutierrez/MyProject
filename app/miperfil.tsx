import {
  SafeAreaView,TextInput,StyleSheet,useColorScheme,View,Alert,} from "react-native";
import CustomText from "@/components/CustomText";
import TitleText from "@/components/TitleText";
import FooterText from "@/components/FooterText";
import { useRouter } from "expo-router";
import { useState } from "react";

async function myAlert(message: string) {
  Alert.alert(message);
}
export default function App() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [codigopostal, setCodigoPostal] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f0f0f0' }]}>
      <View style={[styles.form, { backgroundColor: isDark ? '#2c2c2e' : '#fff', borderColor: isDark ? '#444' : '#ccc' }]}>
        <TitleText> MI PERFIL</TitleText>

        <CustomText>Nombre de usuario:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={nombre}
          onChangeText={setNombre}
        />

 <CustomText>Nombre(s):</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={nombres}
          onChangeText={setNombres}
        />

<CustomText>Apellido(s):</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={apellidos}
          onChangeText={setApellidos}
        />
        <CustomText>Mi Deporte:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={apellidos}
          onChangeText={setApellidos}
        />

<CustomText>Código postal:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={codigopostal}
          onChangeText={setCodigoPostal}
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
      
      </View>
      <FooterText />
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