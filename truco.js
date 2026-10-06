import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [pontos1, atualizarPontos1] = useState(0);
  const [pontos2, atualizarPontos2] = useState(0);
  const [vitorias1, atualizarVitorias1] = useState(0);
  const [vitorias2, atualizarVitorias2] = useState(0);
  const [fim, atualizarFim] = useState(false);

  return (
    <ImageBackground
      source={require('./truco.jpg')}
      style={estilos.fundo}
    >

      <View style={estilos.caixa}>
        <Text style={estilos.titulo}>
          TRUCO
        </Text>

        <View style={estilos.jogadores}>
          <View style={estilos.jogador}>

            <Text style={estilos.nome}>
              Jogador 1
            </Text>
            <Text style={estilos.pontos}>
              {pontos1}
            </Text>
            <Text style={estilos.vitorias}>
              Vitórias: {vitorias1}
            </Text>

            <Button
              title="+1"
              color="#1D3B4A"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos1 + 1 >= 12) {
                  atualizarPontos1(0);
                  atualizarPontos2(0);
                  atualizarVitorias1(vitorias1 + 1);
                  if (vitorias1 + 1 >= 2) {
                    atualizarFim(true);
                    alert("Jogador 1 ganhou o jogo!");
                  }
                  else {
                    alert("Jogador 1 ganhou a rodada!");
                  }
                }
                else {
                  atualizarPontos1(pontos1 + 1);
                }
              }}
            />

            <Button
              title="-1"
              color="#16323F"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos1 > 0) {
                  atualizarPontos1(pontos1 - 1);
                }
                else {
                  alert("A pontuação não pode ficar negativa");
                }
              }}
            />

            <Button
              title="TRUCOO"
              color="#C45A16"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos1 + 3 >= 12) {
                  atualizarPontos1(0);
                  atualizarPontos2(0);
                  atualizarVitorias1(vitorias1 + 1);
                  if (vitorias1 + 1 >= 2) {
                    atualizarFim(true);
                    alert("Jogador 1 ganhou o jogo!");
                  }
                  else {
                    alert("Jogador 1 ganhou a rodada!");
                  }
                }
                else {
                  atualizarPontos1(pontos1 + 3);
                }
              }}
            />
          </View>

          <View style={estilos.jogador}>
            <Text style={estilos.nome2}>
              Jogador 2
            </Text>
            <Text style={estilos.pontos}>
              {pontos2}
            </Text>
            <Text style={estilos.vitorias}>
              Vitórias: {vitorias2}
            </Text>

            <Button
              title="+1"
              color="#1D3B4A"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos2 + 1 >= 12) {
                  atualizarPontos1(0);
                  atualizarPontos2(0);
                  atualizarVitorias2(vitorias2 + 1);
                  if (vitorias2 + 1 >= 2) {
                    atualizarFim(true);
                    alert("Jogador 2 ganhou o jogo!");
                  }
                  else {
                    alert("Jogador 2 ganhou a rodada!");
                  }
                }
                else {
                  atualizarPontos2(pontos2 + 1);
                }
              }}
            />

            <Button
              title="-1"
              color="#16323F"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos2 > 0) {
                  atualizarPontos2(pontos2 - 1);
                }
                else {
                  alert("A pontuação não pode ficar negativa!");
                }
              }}
            />

            <Button
              title="TRUCOO"
              color="#C45A16"
              onPress={() => {
                if (fim) {
                  alert("O jogo já acabou");
                }
                else if (pontos2 + 3 >= 12) {
                  atualizarPontos1(0);
                  atualizarPontos2(0);
                  atualizarVitorias2(vitorias2 + 1);
                  if (vitorias2 + 1 >= 2) {
                    atualizarFim(true);
                    alert("Jogador 2 ganhou o jogo!");
                  }
                  else {
                    alert("Jogador 2 ganhou a rodada!");
                  }
                }
                else {
                  atualizarPontos2(pontos2 + 3);
                }
              }}
            />
          </View>
        </View>

        <View style={estilos.zerar}>

          <Button
            title="ZERAR"
            color="black"
            onPress={() => {
              atualizarPontos1(0);
              atualizarPontos2(0);
              atualizarVitorias1(0);
              atualizarVitorias2(0);
              atualizarFim(false);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1,
    alignItems: 'center',
  },

  caixa: {
    gap: 10,
    marginTop: 30,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },

  jogadores: {
    flexDirection: 'row',
    gap: 30,
  },

  jogador: {
    width: 130,
    gap: 10,
  },

  nome: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },

  nome2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },

  pontos: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },

  vitorias: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },

  zerar: {
    marginTop: 20,
    alignItems: 'center',
  },

});
