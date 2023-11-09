import { StyleSheet, View, Text } from "react-native"
import FansChart from "../elements/FansChart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import CounterCard from "../elements/CounterCard";


const Home = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);

    useEffect(() => {
        dispatch(getCharacterOnPage());
    }, [dispatch]);

    if (appLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.root}>
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
    root: {
        flex: 1,
        backgroundColor: 'white', 
    },
    countersRow: {

    },
    chartContainer: {

    },
})