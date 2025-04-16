import { Children, PropsWithChildren, PropsWithoutRef } from "react";
import { Text,useColorScheme,StyleSheet } from "react-native"

export default function CustomText({children}: PropsWithChildren){
    const ColorScheme = useColorScheme();
    const isDarkMode = ColorScheme == 'dark';
    const textStyle = isDarkMode ? styles.textDark: styles.Text;
    return <Text style={textStyle}>{children}</Text>;
}
const styles = StyleSheet.create({
    Text:{
        color:'#08f',
    },
    textDark:{
        color: '#f80',
    },
})
