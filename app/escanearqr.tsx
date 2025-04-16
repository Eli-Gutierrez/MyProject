import { SafeAreaView, TextInput, StyleSheet, useColorScheme, View } from "react-native";
import CustomButton from "@/components/CusttomButton";
import TitleText from "@/components/TitleText";
import { useRouter } from "expo-router";
import FooterText from "@/components/FooterText";
import Header from "@/components/Header";
export default function App() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f0f0f0' }]}>
    <Header />
    <View style={[styles.form, { backgroundColor: isDark ? '#2c2c2e' : '#fff', borderColor: isDark ? '#444' : '#ccc' }]}>
      <TitleText>ESCANEAR QR</TitleText>
  
      <View style={{ alignItems: 'center' }}>
        <CustomButton>
          Escanear
        </CustomButton>
      </View>
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