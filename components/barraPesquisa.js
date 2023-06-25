import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = value => {
    setPlayerName(value);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.barraPesquisa}
        value={playerName}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={styles.botao} onPress={handleSearch}>
        <Text style={styles.botaoTexto}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barraPesquisa: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: '#0066cc',
  },
  botaoTexto: {
    fontSize: 16,
    color: '#fff',
  },
});