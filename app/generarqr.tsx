import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import CustomButton from "@/components/CusttomButton";
import TitleText from "@/components/TitleText";
import FooterText from "@/components/FooterText";
import Header from "@/components/Header";

export default function App(): JSX.Element {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [showQR, setShowQR] = useState<boolean>(false);

  const handleGenerateQR = (): void => {
    setShowQR(true);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#1c1c1e" : "#f0f0f0" },
      ]}
    >
      <Header />
      <View
        style={[
          styles.form,
          {
            backgroundColor: isDark ? "#2c2c2e" : "#fff",
            borderColor: isDark ? "#444" : "#ccc",
          },
        ]}
      >
        <TitleText>¡BIENVENIDO!</TitleText>

        {showQR && (
          <View style={styles.qrContainer}>
            <FontAwesome
              name="qrcode"
              size={80}
              color={isDark ? "#fff" : "#000"}
            />
          </View>
        )}

        <View style={{ alignItems: "center" }}>
          <CustomButton onPress={handleGenerateQR}>
            Generar QR
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
    alignItems: "center",
  },
  qrContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
});
