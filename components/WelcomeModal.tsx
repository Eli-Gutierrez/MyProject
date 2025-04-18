import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import CustomText from './CustomText';
import CustomButton from './CusttomButton';

interface WelcomeModalProps {
  nombre: string;
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ nombre, visible, onClose, onContinue }) => {
  if (!visible) return null;

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TitleText>¡Hola {nombre}!</TitleText>
        <CustomText>Bienvenido al sistema</CustomText>
        <View style={{ marginTop: 20 }}>
          <CustomButton onPress={onContinue}>Continuar</CustomButton>
        </View>
      </View>
    </View>
  );
};

export default WelcomeModal;

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
