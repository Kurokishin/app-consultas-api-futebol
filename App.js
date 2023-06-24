import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
import GetTeamInfo from './components/timeInfo';
import { StatusBar } from 'expo-status-bar';
//import GetDateInfo from './components/DateInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  const handleSearch = query => {
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
      {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} />}
      {showTeamInfo && <GetTeamInfo searchQuery={searchQuery} />}
    </View>
  );
};

export default App;

const styles = {
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
}
