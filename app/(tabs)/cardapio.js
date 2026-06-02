import { Link } from 'expo-router';
import { useState } from 'react';
import {
FlatList,
Image,
ScrollView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View,
} from 'react-native';

const cardapio = [
    {
    id: '1',
    titulo: 'Bolo no Pote',
    img: require('../../assets/images/bolo.jpg'),
    descricao: 'Bolos caseiros, feitos com muito amor🍰',
    preco: 17.99,
    },
    {
    id: '2',
    titulo: 'Cappuccino Cremoso',
    img: require('../../assets/images/capp.jpg'),
    descricao: 'Combinação perfeita de café, leite vaporizado e espuma cremosa.☕',
    preco: 22.99,
    },
    {
    id: '3',
    titulo: 'Café Preto',
    img: require('../../assets/images/cafe.jpg'),
    descricao: 'Um café preto comum.☕',
    preco: 7.99,
    },
    {
    id: '4',
    titulo: 'Cold Brew Gelado',
    img: require('../../assets/images/cafeg.jpg'),
    descricao: 'Café extraído a frio por horas, suave e refrescante.☕',
    preco: 13.99,
    },
    {
    id: '5',
    titulo: 'Latte Macchiato',
    img: require('../../assets/images/cafem.jpg'),
    descricao: 'Leite vaporizado com um toque suave de espresso.☕',
    preco: 11.99,
    },
    {
    id: '6',
    titulo: 'Misto Gourmet',
    img: require('../../assets/images/misto.jpg'),
    descricao: 'Pão na chapa com queijo derretido e presunto, simples e delicioso.🥪',
    preco: 14.99,
    },
    ];
    

export default function Cardapios() {
const [busca, setBusca] = useState('');

const cardapiosFiltrados = cardapio.filter((item) =>
item.titulo.toLowerCase().includes(busca.toLowerCase())
);

return ( <ScrollView> <View style={styles.topo}> <Link href="/"> <View> <Text style={styles.logoP1}>Café</Text> <Text style={styles.logoP2}>Central</Text> </View> </Link>

    <View style={styles.menu}>
      <Link href="/">
        <Text style={styles.menuItem}>Início</Text>
      </Link>

      <Link href="/sobre">
        <Text style={styles.menuItem}>Sobre</Text>
      </Link>

      <Link href="/cardapio">
        <Text style={[styles.menuItem, styles.ativo]}>
          Cardápio
        </Text>
      </Link>

      <Link href="/contato">
        <Text style={styles.menuItem}>Contato</Text>
      </Link>
    </View>
  </View>

  <View style={styles.container}>
    <Text style={styles.tituloPagina}>
      Nosso Cardápio
    </Text>

    <TextInput
      style={styles.buscarCardapio}
      placeholder="Buscar item"
      value={busca}
      onChangeText={setBusca}
    />

    <FlatList
      data={cardapiosFiltrados}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>
            {item.titulo}
          </Text>

          <Image
            source={item.img}
            style={styles.imagem}
          />

          <Text style={styles.descricao}>
            {item.descricao}
          </Text>

          <Text style={styles.preco}>
            R$ {item.preco.toFixed(2)}
          </Text>

          <Link
            href={{
              pathname: '/detalhesCardapio',
              params: {
                titulo: item.titulo,
                descricao: item.descricao,
                preco: item.preco,
              },
            }}
            asChild
          >
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>
                Ver detalhes
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
    />
  </View>

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
marginBottom: 20,
textAlign: 'center',
},

buscarCardapio: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 10,
marginBottom: 20,
textAlign: 'center'

},

card: {
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 10,
padding: 15,
marginBottom: 20,
},

cardTitulo: {
fontSize: 20,
fontWeight: 'bold',
},

imagem: {
width: '100%',
height: 200,
resizeMode: 'cover',
marginVertical: 10,
},

descricao: {
marginBottom: 10,
},

preco: {
fontSize: 18,
fontWeight: 'bold',
color: '#1f3b2c',
},

botao: {
marginTop: 10,
backgroundColor: '#1f3b2c',
padding: 12,
borderRadius: 8,
},

textoBotao: {
color: '#fff',
textAlign: 'center',
},

rodape: {
padding: 20,
alignItems: 'center',
backgroundColor: '#1f3b2c'
},

textoRodape: {
marginBottom: 10,
color: '#ffffff'
},

linkRodape: {
color: '#1f3b2c',
color: '#ffffff'
},
});
