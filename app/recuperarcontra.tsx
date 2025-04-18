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
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f0f0f0' }]}>
        <View style={[styles.form, { backgroundColor: isDark ? '#1A1B1E' : '#fff', borderColor: isDark ? '#444' : '#ccc' }]}>
          <TitleText>RECUPERAR <br></br> CONTRASEÑA :(</TitleText>
          <CustomText>Ingresa tu correo electrónico para recibir un enlace de recuperación</CustomText>
  
          <CustomText>Correo electronico:</CustomText>
          <TextInput
            placeholder="Correo electronico"
            placeholderTextColor={isDark ? '#aaa' : '#666'}
            style={[styles.input, { backgroundColor: isDark ? '#3a3a3c' : '#fff', color: isDark ? '#fff' : '#000' }]}
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
          />
  <br/>
  <br/>
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
          <LinkText onPress={() => router.push('/registro')}>
    Volver al inicio
  </LinkText>
        </View>

        <WelcomeModal
          nombre={nombre}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onContinue={() => {
            setModalVisible(false);
            router.push('/generarqr');
          }}
        />
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