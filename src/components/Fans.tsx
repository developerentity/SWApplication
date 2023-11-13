import { StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import TableHeader from "../elements/TableHeader";
import TableRow from "../elements/TableRow";
import CounterRow from "../elements/CounterRow";

const Fans = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);
    const { characters, isLastPage } = useAppSelector((state) => state.characterSlice);
    const { favorites } = useAppSelector((state) => state.favoriteSlice);
    const [page, setPage] = useState(1)

    const getNewPage = () => {
        if (!appLoading && !isLastPage) {
            setPage(page + 1)
        }
    }

    const handleScroll = (
        event: NativeSyntheticEvent<NativeScrollEvent>,
    ) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;

        const paddingToBottom = 40;

        if (scrollViewHeight + offsetY >= contentHeight - paddingToBottom) {
            getNewPage()
        }
    }

    useEffect(() => {
        dispatch(getCharacterOnPage(page));
    }, [dispatch, page]);

    return (
        <View style={styles.root}>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>

                <CounterRow favorites={favorites} />

                <View style={styles.tableContainer}>
                    <TableHeader />
                    {characters?.map((item) => <TableRow key={item.created} item={item} />)}
                </View>

            </ScrollView>
        </View>
    )
}

export default Fans;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 16,
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
        marginVertical: 10,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#fff',
    }
})