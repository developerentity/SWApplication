import { StyleSheet, View, Text, ActivityIndicator } from "react-native"
import FansChart from "../elements/FansChart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import CounterCard from "../elements/CounterCard";
import CustomButton from "../elements/CustomButton";
import { resetFavotites } from "../redux/slices/favoriteSlice";

const Home = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);

    useEffect(() => {
        dispatch(getCharacterOnPage());
    }, [dispatch]);

    const onFavouritesClear = () => {
        dispatch(resetFavotites())
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
            <View style={styles.headerRow}>
                <Text style={styles.title}>Fans</Text>
                <CustomButton title="Clear" onPress={onFavouritesClear} />
            </View>
            <View style={styles.countersRow}>
                <CounterCard count={3} title="Female fans" />
                <CounterCard count={2} title="Make fans" />
                <CounterCard count={7} title="Others" />
            </View>
            <View style={styles.chartContainer}>
                <FansChart />
            </View>
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
})