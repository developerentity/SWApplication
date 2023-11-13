import { StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../interfaces/navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Character'>;

const Character = ({ route }: Props) => {

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Name:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.name}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Birth year:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.birth_year}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Gender:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.gender}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Height:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.height}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Mass:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.mass}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Eye color:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.eye_color}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Hair Color:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.hair_color}</Text></View>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                    <View style={styles.keyStyles}><Text style={styles.text}>Skin Color:</Text></View>
                    <View style={styles.valueStyles}><Text style={styles.text}> {route.params.selectedCharacter.skin_color}</Text></View>
                </View>
            </View>
        </View>
    )
}

export default Character;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 16,
    },
    container: {
        marginVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 8,
    },
    separator: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
    keyStyles: {
        flex: 2,
    },
    valueStyles: {
        flex: 3,
    },
    text: {
        fontSize: 20,
    }
})