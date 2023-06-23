import { createStackNavigator } from '@react-navigation/stack'

import CharacterDetail from './CharacterDetails/CharacterDetail';
import CharacterScreen from './CharacterScreen/CharacterScreen';
import style from './style';

const Stack = createStackNavigator();

export default function CharacterStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="CharacterList" component={CharacterScreen} options={{
        ...style.charactersHeader
      }}/>

      <Stack.Screen name="CharacterDetails" component={CharacterDetail} options={{
        ...style.characterDetails
      }}/>
      
    </Stack.Navigator>
  );
}
