import { StyleSheet, View } from "react-native"
import CounterCard from "./CounterCard"
import { ICharacter } from "../interfaces/character";

const CounterRow = ({ favorites }: { favorites: Array<ICharacter> }) => {

    const countUsersByGender = (users: Array<ICharacter>, targetGender: string) =>
        users.filter(user => user.gender === 'male' || user.gender === 'female' ? user.gender === targetGender : targetGender === 'other').length;

    return (
        <View style={styles.countersRow}>
            <CounterCard count={countUsersByGender(favorites, 'female')} title="Female fans" />
            <CounterCard count={countUsersByGender(favorites, 'male')} title="Make fans" />
            <CounterCard count={countUsersByGender(favorites, 'other')} title="Others" />
        </View>
    )
}

export default CounterRow;

const styles = StyleSheet.create({
    countersRow: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 8,
    }
})