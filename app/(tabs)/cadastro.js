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
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarCadastro = () => {
    if (nome === '' || email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert(
      'Sucesso',
      `Cadastro de ${nome} realizado com sucesso!`
    );

    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      {/* TOPO */}
     <Header ativo="cadastro"></Header>


      {/* CONTEÚDO */}
      <View style={styles.container}>

        <Text style={styles.tituloPagina}>
          Faça seu Cadastro
        </Text>

        <Text style={styles.subtitulo}>
          Preencha os campos abaixo para criar sua conta.
        </Text>

        <View style={styles.card}>

          {/* NOME */}
          <View style={styles.campo}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>

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

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.botao}
            onPress={realizarCadastro}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

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