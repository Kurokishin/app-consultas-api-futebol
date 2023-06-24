import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const GetTeamInfo = ({ searchQuery }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
      const apiUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const filteredTeams = response.data.map(team => ({
          team_id: team.team_id,
          name: team.team_name,
          badge: team.team_badge,
          players: team.players.map(player => ({
            player_id: player.player_id,
            player_image: player.player_image,
            player_name: player.player_name,
          })),
        }));

        const matchedTeams = filteredTeams.filter(team =>
          team.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setTeams(matchedTeams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    if (searchQuery) {
      fetchData();
    } else {
      setTeams([]);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {teams.map(team => (
        <View key={team.team_id} style={styles.teamContainer}>
          <Text style={styles.heading}>Time</Text>
          <Text style={styles.teamName}>Nome: {team.name}</Text>
          {team.badge && <Image source={{ uri: team.badge }} style={styles.teamBadge} />}
          <Text style={styles.heading}>Jogadores</Text>
          {team.players.map(player => (
            <View key={player.player_id} style={styles.playerContainer}>
              <Text style={styles.playerName}>Nome: {player.player_name}</Text>
              {player.player_image && <Image source={{ uri: player.player_image }} style={styles.playerImage} />}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    // paddingTop: 16,
  },
  teamContainer: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    marginBottom: 8,
  },
  teamBadge: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  playerContainer: {
    marginBottom: 8,
  },
  playerName: {
    fontSize: 14,
    marginBottom: 4,
  },
  playerImage: {
    width: 50,
    height: 50,
  },
});

export default GetTeamInfo;
