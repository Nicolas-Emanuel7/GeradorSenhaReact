import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'

export function ModalPassword( {password, handleClose}){
    const { saveItem } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)

        await saveItem("@pass", password)

        alert('Senha copiada com sucesso!')

        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24,24,24, 0.6)',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: '#FFF',
        width: '85%',
        borderRadius: 8,
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#000'
    },
    innerPassword:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonArea:{
        flexDirection: 'row',
        marginTop: 24,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button:{
        flex:1,
        backgroundColor: '#FFF',
        width: '48%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonSave:{
        backgroundColor: '#392DE9'
    },
    buttonSaveText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})