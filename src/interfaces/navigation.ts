import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ICharacter} from './character';

export type RootStackParamList = {
  Fans: undefined;
  Character: {selectedCharacter: ICharacter};
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
