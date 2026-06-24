import { Link } from 'expo-router';
import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Estado adicional para mostrar mensagens na tela além do Alert
  const [mensagemSistema, setMensagemSistema] = useState('');

  const enviarFormulario = () => {
    if (nome === '' || email === '' || mensagem === '') {
      // Mostra alerta no celular
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      // Mostra mensagem na tela (útil no navegador)
      setMensagemSistema('Erro: Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Enviado', `Obrigado ${nome}, recebemos sua mensagem!`);
    setMensagemSistema(`Sucesso: Obrigado ${nome}, recebemos sua mensagem!`);

    setNome('');
    setEmail('');
    setMensagem('');

  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      {/* TOPO */}
      <Header ativo="contato"></Header>

      {/* CONTEÚDO */}
      <View style={styles.container}>
        <Text style={styles.tituloPagina}>Fale Conosco</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />

        <TouchableOpacity style={styles.botao} onPress={enviarFormulario}>
          <Text style={styles.textoBotao}>Enviar Mensagem</Text>
        </TouchableOpacity>

        {/* Mensagem de validação visível na tela */}
        {mensagemSistema !== '' && (
          <Text style={{ marginTop: 10, textAlign: 'center', color: mensagemSistema.startsWith('Erro') ? 'red' : 'green' }}>
            {mensagemSistema}
          </Text>
        )}
      </View>

      {/* RODAPÉ */}
      <Footer></Footer>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  topo: {
    backgroundColor: '#1f3b2c',
    padding: 20,
    alignItems: 'center',
  },
  logoP1: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoP2: {
    color: '#c7a17a',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    marginTop: 10,
    alignItems: 'center',
    gap: 8,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
  },
  ativo: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  container: {
    padding: 20,
  },
  tituloPagina: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    textAlign: 'center',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#1f3b2c',
    padding: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rodape: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1f3b2c',
    marginTop: 'auto',
  },
  textoRodape: {
    marginBottom: 10,
    color: '#ffffff',
  },
  linkRodape: {
    color: '#ffffff',
  },
});
