import { PropsWithChildren, PropsWithoutRef } from "react";
import { TouchableOpacity,StyleSheet,Text } from "react-native";


export type CustomButtonProps = PropsWithChildren<{
onPress?: () => void;
}>; 

export default function CustomButton({children,onPress}:CustomButtonProps)
    {
        return ( 
        <TouchableOpacity style={styles.button} onPress={onPress}>{
            typeof children == 'string' ?
            <Text style={styles.buttonText}>{children}</Text>:
            children
    }
    </TouchableOpacity>
    );
}
const styles =StyleSheet.create({
    button: {
      backgroundColor: '#08f',
      borderRadius: 8,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',   // <- centra el texto dentro del botón
      alignSelf: 'center',    // <- centra el botón en su contenedor padre
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold', // <- Esto la hace "rellenita"
    },
  });
  