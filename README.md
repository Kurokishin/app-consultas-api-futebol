## 🧾 **Descrição**

- Este projeto é uma aplicação feita em react native que utiliza a API "api-football" para buscas de estatísticas do futebol, como times, jogadores e jogos.
Trabalho referente a atividade 3 da N2 da disciplina de Desenvolvimento WEB 2
  
 ## 🚀 **Autores**
  
- Francisco Luan

- Luan Claiver
  
- Rafael Pereira

## ⚙️ **Estrutura**

<details>
<summary>BarraPesquisa.js</summary>


### **_BarraPesquisa.js_**: 

Componente de barra de pesquisa (SearchBar) em React Native. A estrutura é composta por três seções principais:

- Importações: As bibliotecas necessárias para o componente são importadas, incluindo React, useState para gerenciar o estado, e algumas componentes do React Native, como ```Text, View, TextInput, StyleSheet e TouchableOpacity```.

- Declaração do componente: O componente SearchBar é declarado como uma função que recebe uma propriedade chamada onSearch. Dentro do componente, é criado um estado playerName usando o hook useState, que permite armazenar e atualizar o valor digitado na barra de pesquisa.

- Renderização do componente: Dentro do bloco return, o componente é renderizado usando elementos ```View, TextInput e TouchableOpacity``` do React Native. O TextInput é usado para a barra de pesquisa, onde o valor é controlado pelo estado playerName e atualizado pelo método handleInputChange quando o texto é alterado. O TouchableOpacity é um botão que dispara a função handleSearch quando pressionado, que por sua vez chama a função onSearch passando o playerName como parâmetro.

O componente também possui um objeto styles criado com a função ```StyleSheet.create()```, onde são definidos os estilos para cada elemento do componente, como o estilo da barra de pesquisa, do botão e do texto.

</details>

<details>
<summary>JogadorInfo.js</summary>

### **_JogadorInfo.js_**:

O código define um componente GetPlayerInfo que realiza uma pesquisa de jogadores usando a API de futebol. Ele exibe as informações dos jogadores encontrados em cartões individuais, fornecendo uma estrutura clara e simples.

- Importações: Importação das bibliotecas necessárias, incluindo React, useEffect, useState, View, Text, Image, StyleSheet e axios.

- Declaração do componente: O componente GetPlayerInfo é declarado como uma função que recebe a propriedade searchQuery.

- Chamada à API: Acionado quando o valor de searchQuery muda e realiza uma solicitação GET para a API de futebol usando axios.

- Renderização do componente: O componente é renderizado no bloco return. A função map é usada para exibir as informações dos jogadores em cartões individuais.
Estilos: Os estilos são definidos usando a função StyleSheet.create() para cada elemento do componente.

</details>

<details>
<summary>TimeInfo.js</summary>


### **_timeInfo.js_**:


- Importações: Importação das bibliotecas necessárias, incluindo React, useEffect, useState, View, Text, Image, StyleSheet e axios.

- Declaração do componente: O componente GetTeamInfo é declarado como uma função que recebe a propriedade searchQuery.

- Efeitos colaterais e chamada à API: Um efeito colateral é usado para acionar a função fetchData quando o valor da propriedade searchQuery muda. Essa função realiza uma solicitação GET para a API de futebol usando axios, buscando informações dos times. Os dados retornados são filtrados e formatados antes de serem atualizados no estado teams por meio da função setTeams.

- Renderização do componente: O componente é renderizado no bloco return. A função map é usada para exibir as informações dos times em contêineres individuais. Dentro de cada contêiner, são exibidos o nome do time, o emblema (badge) do time (se disponível) e os jogadores associados ao time.

- Estilos: Os estilos são definidos usando a função StyleSheet.create() para cada elemento do componente.

</details>

<details>
<summary>App.js</summary>


### **_App.js_**:

- Importações: Importação das bibliotecas necessárias, incluindo React, useState, View, Text, StyleSheet, ScrollView e StatusBar, além da importação dos componentes SearchBar, GetPlayerInfo e GetTeamInfo.

- Declaração do componente App: O componente App é declarado como uma função. Dentro dele, são criados estados para searchQuery (consulta de pesquisa), showPlayerInfo (indicador de exibição das informações do jogador) e showTeamInfo (indicador de exibição das informações do time).

- Funções de manipulação de pesquisa: São definidas as funções handleSearch para lidar com a pesquisa e clearSearch para limpar a pesquisa. A função handleSearch recebe uma consulta como parâmetro, atualiza o estado de searchQuery e define showPlayerInfo e showTeamInfo como true para exibir as informações do jogador e do time.

- Renderização do componente: No bloco return, o componente é renderizado. É exibido um título, um StatusBar e o componente SearchBar, que recebe as funções de pesquisa e limpeza. Em seguida, é usado um ScrollView para permitir a rolagem e são renderizados os componentes GetPlayerInfo e GetTeamInfo com base nos valores de showPlayerInfo e showTeamInfo.

- Estilos: Os estilos são definidos usando a função StyleSheet.create() para o contêiner principal e o título.

</details>


## 🔌 **Tecnologias utilizadas**

- **React Native:** Tecnologia de desenvolvimento de aplicativos móveis que permite criar aplicativos para iOS e Android usando JavaScript e a biblioteca React.
- **API-Football:** A api-football é uma API Restful para dados de futebol. Ela fornece informações sobre futebol como fuso horário, temporadas, países, ligas, times, classificações, jogos e eventos.

## 🏳️ **Como executar?**

### **Passo 1**
- Faça download ou clone o repositório.

### **Passo 2**
- Execute o comando ```npm install``` para instalar as dependências do projeto;

### **Passo 3**
- Após a instalação das dependências, execute o comando ```npm start```;

### **Passo 4**
- Aguarde o processo de compilação e você pode utilizar o Qrcode para utilizar no App Expo, ou você pode pressionar W, para acessar a aplicação no navegador.


