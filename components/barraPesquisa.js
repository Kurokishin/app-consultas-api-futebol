import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Digite o nome do jogador ou time"
      />
      <Button title="Pesquisar" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchBar;
