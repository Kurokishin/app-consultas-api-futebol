import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';

export default function App() {
  const handleSearch = async (searchTerm) => {
    try {
      const players = await GetPlayerInfo(searchTerm);
      console.log(players); // Exibe os resultados da pesquisa no console
    } catch (error) {
      console.error('Error searching players:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Aplicação de estatísticas esportivas</Text>
      <StatusBar style="auto" />
      <SearchBar onSearch={handleSearch}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
