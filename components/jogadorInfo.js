import axios from 'axios';

// Função para buscar jogadores e seus respectivos times
const GetPlayerInfo = async (searchPlayer) => {
  try {
    const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchPlayer}&APIkey=${apiKey}`;
    
    const response = await axios.get(apiUrl);

    // Extrair os campos de nome do jogador e time da resposta da API
    const players = response.data.map((player) => ({
      nome: player.player_name,
      time: player.team_name,
    }));

    return players;
  } catch (error) {
    console.error('Error searching players:', error);
    throw error;
  }
};

export default GetPlayerInfo;
