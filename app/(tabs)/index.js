import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function Index() {
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
            <Text style={[styles.menuItem, styles.ativo]}>Início</Text>
          </Link>

          <Link href="/sobre">
            <Text style={styles.menuItem}>Sobre</Text>
          </Link>

          <Link href="/cardapio">
            <Text style={styles.menuItem}>Cardápio</Text>
          </Link>

          <Link href="/contato">
            <Text style={styles.menuItem}>Contato</Text>
          </Link>

          <Link href="/login">
            <Text style={styles.menuItem}>Login</Text>
          </Link>
        </View>
      </View>

      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Seja Bem-Vindo ao Café Central
        </Text>

        <Text style={styles.subtitulo}>
          Aprecie lanches e cafés super relaxantes.
        </Text>

        <Text style={styles.subtitulo2}>
          Para visualizar o cardápio é necessário fazer login.
        </Text>

        {/* BOTÕES */}
        <View style={styles.botoes}>

          <TouchableOpacity style={styles.btnPrimario}>
            <Text style={styles.textoBotao}>Fazer Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSecundario}>
            <Text style={styles.textoBotao}>Fale Conosco</Text>
          </TouchableOpacity>

        </View>

        {/* DESTAQUES */}
        <Text style={styles.tituloSecao}>
          Por que comprar no Café Central?
        </Text>

        <Text style={styles.texto}>
          Cafés feitos na hora com ingredientes selecionados.
        </Text>

        <Text style={styles.texto}>
          Você escolhe todos os ingredientes do seu café ou lanche.
        </Text>

        <Text style={styles.texto}>
          Produtos naturais, sem industrialização ou químicos.
        </Text>

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
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },

  subtitulo2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  btnPrimario: {
    flex: 1,
    backgroundColor: '#1f3b2c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnSecundario: {
    flex: 1,
    backgroundColor: '#669982',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  texto: {
    textAlign: 'center',
    marginBottom: 8,
  },

  rodape: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1f3b2c',
  },

  textoRodape: {
    marginBottom: 10,
    color: '#fff',
  },

  linkRodape: {
    color: '#fff',
    fontWeight: 'bold',
  },

});