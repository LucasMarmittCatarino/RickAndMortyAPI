import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Http from '../../../libs/http'
import style from './style';

const CharacterDetail = ({ route }) => {  
  const { char_url } = route.params;

  //Definindo Hooks
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false)
  const [origin, setOrigin] = useState(null)
  const [episodeDetails, setEpisodeDetails] = useState([])

  //Requisitando personagens
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await Http.instance.get(char_url);
      setCharacter(response);
      setLoading(false)
    };
    fetchData();
  }, [char_url]);

  //Requisitando origem
  useEffect(() =>{
    const fetchOrigin = async () => {
      if (character && character.origin && character.origin.url){
        const response = await Http.instance.get(character.origin.url);
        setOrigin(response)
      }
    };
    fetchOrigin();
  }, [character]);

  //Requisitando episódios
  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      if (character && character.episode) {
        const episodeDetailsPromises = character.episode.map(async (episodeUrl) => {
          const response = await fetch(episodeUrl);
          const episodeDetail = await response.json();
          return episodeDetail;
        });

        const resolvedEpisodeDetails = await Promise.all(episodeDetailsPromises);
        setEpisodeDetails(resolvedEpisodeDetails);
      }
    };

    fetchEpisodeDetails();
  }, [character]);
  
  

  // Verificação para saber qual cor usar no style
  let estiloTexto = style.textStatusDefault;
  let estiloOrigin = style.defaultOrigin

  if (character && character.status === "Alive") {
    estiloTexto = style.aliveText;
    estiloOrigin = style.aliveOrigin;
  } else if (character && character.status === "Dead") {
    estiloTexto = style.deadText;
    estiloOrigin = style.deadOrigin
  }

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator color="black" size="large" style={style.loader} />
      ) : null}
      <ScrollView >
      
        {character && (
          <View style={style.container}>

            <View style={style.headerContainer}>
              <Image style={style.backgroundImage} source={{ uri: character.image }} />
            </View>
            
            <View style={style.idContainer}>
              <Text style={[estiloTexto, {fontSize: 60}]}>•</Text>
              <Text style={style.textName}>{character.name}</Text>
              <Text style={estiloTexto}>({character.status})</Text>
            </View>

            <Text style={style.specieText}>( {character.species} - {character.gender} )</Text>

            <View>

              <View style= {estiloOrigin}>
                <Text style={style.originTittle}>Origin:</Text>
                <Text style={style.originText}>{character.origin.name}</Text>
              </View>

              {origin &&(
                <View style={style.containerOrigin}>
                  <Text style={style.originInfoText}>Type: {origin.type}</Text>
                  <Text style={style.originInfoText}>Dimension: {origin.dimension}</Text>
                </View>
              )}

            </View>

          </View>
        )}
        
        {character && episodeDetails &&(
          <View>

            <Text style={style.episodesListHeader}>Episodes ({episodeDetails.length})</Text>
            
            {episodeDetails.map((item) => (
            <View key={item.id} style={style.episodeItem}>
              <Text>{item.name} | {item.episode}</Text>
            </View>
          ))}
            
          </View>
        )}

      </ScrollView>

    </SafeAreaView>
  );
};

export default CharacterDetail;
