import { Link } from 'expo-router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>

      {/* TOPO */}
      <Header ativo="inicio"></Header>

      {/* HERO */}
      <View style={styles.principal}>
        <View style={styles.titulosCabc}>
          <Text style={styles.tituloCabc}>
            Seja Bem-Vindo ao Nosso Aplicativo da Café Central
          </Text>

          <View style={styles.botoes}>
            <Link href='/login'>
              <TouchableOpacity style={styles.btnPrimario}>
                <Text style={styles.textoBotao}>Fazer Login</Text>
              </TouchableOpacity>
            </Link>

            <Link href='/contato'>
              <TouchableOpacity style={styles.btnSecundario}>
                <Text style={styles.textoBotao}>Fale Conosco</Text>
              </TouchableOpacity>
            </Link>

          </View>
          
          <Text style={styles.subCabc}>Porque comprar na Café Central</Text>
        </View>

        {/* CARDS */}
        <View style={styles.containerCards}>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>Cafés feitos na hora</Text>
            <Text style={styles.textoCard}>
              Você escolhe todos os ingredientes.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>Serviços naturais</Text>
            <Text style={styles.textoCard}>
              Sem industrialização, tudo artesanal.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>Atendimento imediato</Text>
            <Text style={styles.textoCard}>
              Respostas rápidas e eficientes.
            </Text>
          </View>

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

  container: {
    backgroundColor: '#f9f9f9',
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

  principal: {
    padding: 24,
  },

  titulosCabc: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

  tituloCabc: {
    color: '#1f3b2c',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subCabc: {
    color: '#1f3b2c',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  btnPrimario: {
    flex: 1,
    backgroundColor: '#1f3b2c',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },

  btnSecundario: {
    flex: 1,
    backgroundColor: '#669982',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },

  textoBotao: {
    color: '#f6f6f6',
    fontWeight: 'bold',
  },

  containerCards: {
    gap: 16,
    marginBottom: 30,
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#e1d9d1',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  tituloCard: {
    color: '#1f3b2c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  textoCard: {
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 20,
  },

  rodape: {
    backgroundColor: '#1f3b2c',
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },

  txtRodape: {
    marginBottom: 10,
    color: '#ffffff',
  },

  txtRodapeLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});