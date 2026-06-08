import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { Link } from 'expo-router';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {

    if (email === '' || senha === '') {

      Alert.alert(
        'Erro',
        'Por favor, preencha todos os campos.'
      );

      return;
    }

    Alert.alert(
      'Sucesso',
      'Login realizado com sucesso!'
    );

    setEmail('');
    setSenha('');
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
            <Text style={styles.menuItem}>
              Início
            </Text>
          </Link>

          <Link href="/sobre">
            <Text style={styles.menuItem}>
              Sobre
            </Text>
          </Link>

          <Link href="/cardapio">
            <Text style={styles.menuItem}>
              Cardápio
            </Text>
          </Link>

          <Link href="/contato">
            <Text style={styles.menuItem}>
              Contato
            </Text>
          </Link>

          <Link href="/login">
            <Text style={[styles.menuItem, styles.ativo]}>
              Login
            </Text>
          </Link>

        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.container}>

        <Text style={styles.tituloPagina}>
          Faça seu Login
        </Text>

        <Text style={styles.subtitulo}>
          Entre com seu e-mail e senha.
        </Text>

        <View style={styles.card}>

          {/* EMAIL */}
          <View style={styles.campo}>

            <Text style={styles.label}>
              E-mail
            </Text>

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

            <Text style={styles.label}>
              Senha
            </Text>

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
          <TouchableOpacity
            style={styles.botao}
            onPress={realizarLogin}
          >

            <Text style={styles.textoBotao}>
              Entrar
            </Text>

          </TouchableOpacity>

          {/* LINK CADASTRO */}
          <Link href="/cadastro">

            <Text style={styles.linkCadastro}>
              Não possui conta? Cadastre-se
            </Text>

          </Link>

        </View>
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
    marginTop: 30,
  },

  textoRodape: {
    marginBottom: 10,
    color: '#ffffff',
  },

  linkRodape: {
    color: '#ffffff',
  },

});