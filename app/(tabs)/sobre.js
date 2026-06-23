import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
export default function Sobre() {
  return (
    <ScrollView>

      {/* TOPO */}
      <Header ativo="sobre"></Header>

      {/* CONTEÚDO */}
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Sobre Nós
        </Text>

        <Text style={styles.texto}>
          O Café Central nasceu com o propósito de oferecer uma experiência única em cafés especiais, unindo qualidade e conforto.
        </Text>

        <Text style={styles.tituloSecao}>
          Nossa missão
        </Text>

        <Text style={styles.texto}>
          Proporcionar experiências marcantes através de cafés artesanais preparados com excelência e paixão.
        </Text>

        <Text style={styles.tituloSecao}>
          Nossa essência
        </Text>

        <Text style={styles.texto}>
          • Qualidade em cada detalhe
        </Text>

        <Text style={styles.texto}>
          • Experiência acolhedora
        </Text>

        <Text style={styles.texto}>
          • Inovação no preparo de cafés
        </Text>

      </View>

      {/* RODAPÉ */}
      <Footer></Footer>

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
    marginBottom: 15,
    textAlign: 'center',
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
  },

  texto: {
    textAlign: 'center',
    marginBottom: 8,
  },

  rodape: {
    backgroundColor: '#1f3b2c',
    padding: 20,
    alignItems: 'center',
  },

  textoRodape: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },

  linkRodape: {
    color: '#fff',
    fontWeight: 'bold',
  },

});