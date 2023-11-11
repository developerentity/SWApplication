import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from "react-native"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import CounterCard from "../elements/CounterCard";
import CustomButton from "../elements/CustomButton";
import { resetFavorites } from "../redux/slices/favoriteSlice";
import TableHeader from "../elements/TableHeader";
import TableRow from "../elements/TableRow";
import { ICharacter } from "../interfaces/character";

const Home = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);
    const { characters } = useAppSelector((state) => state.characterSlice);
    const { favorites } = useAppSelector((state) => state.favoriteSlice);

    const countUsersByGender = (users: Array<ICharacter>, targetGender: string) =>
        users.filter(user => user.gender === 'male' || user.gender === 'female' ? user.gender === targetGender : targetGender === 'other').length;

    useEffect(() => {
        if (!characters.length) {
            dispatch(getCharacterOnPage());
        }
    }, [dispatch]);

    const onFavoritesClear = () => {
        dispatch(resetFavorites())
    }

    if (appLoading) {
        return (
            <View style={styles.loading}>
                <Text><ActivityIndicator size="large" /></Text>
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Fans</Text>
                    <CustomButton title="Clear" onPress={onFavoritesClear} />
                </View>
                <View style={styles.countersRow}>
                    <CounterCard count={countUsersByGender(favorites, 'female')} title="Female fans" />
                    <CounterCard count={countUsersByGender(favorites, 'male')} title="Make fans" />
                    <CounterCard count={countUsersByGender(favorites, 'other')} title="Others" />
                </View>

                <View style={styles.tableContainer}>
                    <TableHeader />
                    {characters?.map((item) => <TableRow key={item.created} item={item} />)}
                </View>

            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        flex: 1,
        padding: 16,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
    },
    countersRow: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 8,
    },
    chartContainer: {
        marginTop: 8,
    },
    tableContainer: {
        marginTop: 10,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#fff',
    }
})