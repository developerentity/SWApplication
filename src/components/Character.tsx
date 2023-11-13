import { Text, View } from "react-native"
import { ICharacter } from "../interfaces/character";

const Character = () => {

    const processString = (inputString: string) => {
        let modifiedString = inputString.replace(/_/g, ' ');
        return modifiedString.replace(/\b\w/g, (match) => {
            return match.toUpperCase();
        });
    }

    return (
        <View>



        </View>
    )
}

export default Character;