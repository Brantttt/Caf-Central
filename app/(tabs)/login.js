import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { Link, useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemSistema, setMensagemSistema] = useState('');

  // Hook para navegação
  const router = useRouter();

  const realizarLogin = () => {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      setMensagemSistema('Erro: Por favor, preencha todos os campos.');
      return;
    }

    if (!email.includes('@') || !email.includes('.com')) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      setMensagemSistema('Erro: Digite um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      setMensagemSistema('Erro: A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    setMensagemSistema('Sucesso: Login realizado com sucesso!');
    setEmail('');
    setSenha('');

    // Redireciona para a página cardápio após validação
    router.push('/cardapio');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* TOPO */}
      <Header ativo="login"></Header>

      {/* CONTEÚDO */}
      <View style={styles.container}>
        <Text style={styles.tituloPagina}>Faça seu Login</Text>
        <Text style={styles.subtitulo}>Entre com seu e-mail e senha.</Text>

        <View style={styles.card}>
          {/* EMAIL */}
          <View style={styles.campo}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* SENHA */}
          <View style={styles.campo}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              autoCapitalize="none"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          {/* BOTÃO LOGIN */}
          <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          {/* Mensagem de validação visível na tela */}
          {mensagemSistema !== '' && (
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                color: mensagemSistema.startsWith('Erro') ? 'red' : 'green',
              }}
            >
              {mensagemSistema}
            </Text>
          )}

          {/* LINK CADASTRO */}
          <Link href="/cadastro">
            <Text style={styles.linkCadastro}>
              Não possui conta? Cadastre-se
            </Text>
          </Link>
        </View>
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
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitulo: {
    textAlign: 'center',
    marginBottom: 25,
    color: '#666',
    fontSize: 16,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
  },

  campo: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },

  botao: {
    marginTop: 10,
    backgroundColor: '#1f3b2c',
    padding: 14,
    borderRadius: 8,
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  linkCadastro: {
    textAlign: 'center',
    marginTop: 18,
    color: '#1f3b2c',
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