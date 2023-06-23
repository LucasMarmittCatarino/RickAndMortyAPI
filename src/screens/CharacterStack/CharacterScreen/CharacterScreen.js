import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';

import Http from '../../../libs/http';
import CharacterCell from './CharacterCell/CharacterCell'
import style from '../CharacterScreen/CharacterCell/style'

const CharacterScreen = ({ navigation }) => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const fetchCharacters = async (url) => {
    setLoading(true);
    const response = await Http.instance.get(url);
    setCharacters(response.results);
    setLoading(false);

    //Condicionais que vão armazenar a url next ou prev
    if (response.info.next) {
      setNext(response.info.next);
    } else {
      setNext(null);
    }
    if (response.info.prev) {
      setPrev(response.info.prev);
    } else {
      setPrev(null);
    }
  };

  useEffect(() => {
    fetchCharacters('https://rickandmortyapi.com/api/character/');
  }, []);

  const buttomNext = () => {
    fetchCharacters(next);
  };

  const buttomPrev = () => {
    fetchCharacters(prev);
  };

  //Leva para os detalhes do personagem
  const charPress = (char_url) => {
    navigation.navigate('CharacterDetails', {char_url} );
  };

  return (

    <SafeAreaView style={style.container}>
      
      {loading ? (
        <ActivityIndicator color="black" size="large" style={style.loader} />
      ) : null}

      <FlatList
        style={style.lista}
        data={characters}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => charPress('https://rickandmortyapi.com/api/character/' + item.id)}>
            <CharacterCell item={item} />
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{paddingVertical: 10}}></View>}
      />

      <View style={[style.buttomContainer, {justifyContent: prev && next ? 'space-between' : next ? 'flex-end' : prev ? 'flex-start' : 'flex-end',}
]}>

          {prev ? (
            <TouchableOpacity style={style.buttom} onPress={buttomPrev}>
              <Text style={[style.buttomText, style.mirrorText, {marginLeft: 10}]}>➔</Text>
              <Text style={style.buttomText}>Previous</Text>
            </TouchableOpacity>
          ) : null}

          {next ? (
            <TouchableOpacity style={style.buttom} onPress={buttomNext}>
              <Text style={style.buttomText}>Next</Text>
              <Text style={[style.buttomText, {marginRight: 10}]}>➔</Text>
            </TouchableOpacity>
          ) : null}

      </View>

    </SafeAreaView>

  );
};

export default CharacterScreen;
