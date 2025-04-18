import {
  SafeAreaView,TextInput,StyleSheet,useColorScheme,View,Alert,} from "react-native";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CusttomButton";
import TitleText from "@/components/TitleText";
import LinkText from "@/components/LinkTitle";
import FooterText from "@/components/FooterText";
import WelcomeModal from "@/components/WelcomeModal";
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
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f0f0f0' }]}>
      <View style={[styles.form, { backgroundColor: isDark ? '#1A1B1E' : '#fff', borderColor: isDark ? '#444' : '#ccc' }]}>
        <TitleText> REGISTRAR USUARIO</TitleText>

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

<CustomText>Código postal:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={codigopostal}
          onChangeText={setCodigoPostal}
        />

<CustomText>Fecha de nacimiento:</CustomText>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
          value={apellidos}
          onChangeText={setApellidos}
        />
        
        <LinkText onPress={() => console.log('/app/index.tsx')}>
          ¿Ya tienes una cuenta?
        </LinkText>
        <View style={{ alignItems: 'center' }}>
          <CustomButton
            onPress={() => {
              if (!nombre) return myAlert("Escribe tu nombre");
              setModalVisible(true);
            }}
          >
            Confirmar
          </CustomButton>
        </View> 
      </View>
    </SafeAreaView>

    );}
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