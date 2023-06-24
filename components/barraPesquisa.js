import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = value => {
    setPlayerName(value);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <View>
      <TextInput
        style={styles.barraPesquisa}
        value={playerName}
        onChangeText={handleInputChange}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;

const styles = {
  barraPesquisa: {
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    width: 300,
  },
};
