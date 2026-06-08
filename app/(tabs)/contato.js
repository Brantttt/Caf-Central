import { Link } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarFormulario = () => {
    if (nome === '' || email === '' || mensagem === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Enviado', `Obrigado ${nome}, recebemos sua mensagem!`);

    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView>

      {/* TOPO */}
      <View style={styles.topo}>
        <Link href="/">
          <View>
            <Text style={styles.logoP1}>Café</Text>
            <Text style={styles.logoP2}>Central</Text>
          </View>
        </Link>

        <View style={styles.menu}>
          <Link href="/">
            <Text style={styles.menuItem}>Início</Text>
          </Link>

          <Link href="/sobre">
            <Text style={styles.menuItem}>Sobre</Text>
          </Link>

          <Link href="/cardapio">
            <Text style={styles.menuItem}>Cardápio</Text>
          </Link>

          <Link href="/contato">
            <Text style={[styles.menuItem, styles.ativo]}>Contato</Text>
          </Link>
        </View>
      </View>

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
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          © 2026 Café Central. Todos os direitos reservados.
        </Text>

        <Link href="/contato">
          <Text style={styles.linkRodape}>
            Entre em contato
          </Text>
        </Link>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
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
    backgroundColor: '#1f3b2c'
  },

  textoRodape: {
    marginBottom: 10,
    color: '#ffffff',
  },

  linkRodape: {
    color: '#ffffff',
  },
});