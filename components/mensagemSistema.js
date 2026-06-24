import {View, Text, StyleSheet} from 'react-native'

export default function MensagemSistema({mensagem,tipo}){
    if(mensagem===''){
        return null
    }
    return(
        <Text style={tipo ==='erro'
            ? styles.mensagemErro
            : styles.mensagemSucesso
        }>
            {mensagem}
        </Text>
    )
}

