import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';

export default function App() {
  const [playerData, setPlayerData] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const players = await GetPlayerInfo(searchTerm);
      setPlayerData(players);
    } catch (error) {
      console.error('Error searching players:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicação de estatísticas esportivas</Text>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <SearchBar onSearch={handleSearch} />

        <ScrollView style={styles.playerDataContainer}>
          {playerData.map((player, index) => (
            <View key={index} style={styles.playerData}>
              <Image source={{ uri: player.foto }} style={styles.playerImage} />
              <Text style={styles.playerName}>Nome: {player.nome}</Text>
              <Text style={styles.playerPosition}>Posição: {player.posicao}</Text>
              <Text style={styles.playerTeam}>Time: {player.time}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  playerDataContainer: {
    marginTop: 20,
  },
  playerData: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
  },
  playerImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  playerPosition: {
    fontSize: 16,
    marginTop: 5,
  },
  playerTeam: {
    fontSize: 16,
    marginTop: 5,
  },
});
