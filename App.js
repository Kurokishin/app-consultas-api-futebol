import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
import GetTeamInfo from './components/timeInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowPlayerInfo(true);
    setShowTeamInfo(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowPlayerInfo(false);
    setShowTeamInfo(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicação de estatísticas esportivas</Text>
      <StatusBar style="auto" />
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      <ScrollView>
        {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} />}
        {showTeamInfo && <GetTeamInfo searchQuery={searchQuery} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
