import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
//import GetTeamInfo from './components/TeamInfo';
//import GetDateInfo from './components/DateInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  //const [showTeamInfo, setShowTeamInfo] = useState(false);

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
    <View>
      <Text>Aplicação de estatísticas esportivas</Text>
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} />}
    </View>
  );
};
//{showTeamInfo && <GetTeamInfo searchQuery={searchQuery} />}
export default App;
