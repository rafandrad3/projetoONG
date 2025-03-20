import { View, Image, Text, TouchableOpacity } from 'react-native';
import logo from '@/assets/images/logoKD.png';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Seja Bem Vindo
      </Text>

      <Image
        source={logo}
        style={{
          height: 200,
          width: 250,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          marginVertical: 20,
          paddingHorizontal: 20,
        }}>
        Doe para ONGs e ajude a transformar vidas! Sua contribuição pode fazer a
        diferença na vida de muitas pessoas e comunidades. Juntos podemos criar
        um futuro melhor para todos. Faça sua parte, ajude agora!
      </Text>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#6495ED',
            height: 40,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#6495ED',
            height: 40,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}