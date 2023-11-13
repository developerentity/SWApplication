import { StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import TableHeader from "../elements/TableHeader";
import TableRow from "../elements/TableRow";
import CounterRow from "../elements/CounterRow";
import { ICharacter } from "../interfaces/character";

const Fans = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);
    const { characters, isLastPage } = useAppSelector((state) => state.characterSlice);
    const { favorites } = useAppSelector((state) => state.favoriteSlice);
    const [page, setPage] = useState(1)
    const [sortedData, setSortedData] = useState<Array<ICharacter>>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('asc');

    useEffect(() => {
        dispatch(getCharacterOnPage(page));
    }, [dispatch, page]);

    useEffect(() => {
        setSortedData(characters)
    }, [characters])

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

    const onSortData = () => {
        const processedData = [...sortedData].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (sortOrder === 'desc') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });

        sortOrder === ''
            ? setSortedData(characters)
            : setSortedData(processedData)

        setSortOrder((prevOrder) => {
            if (prevOrder === 'asc') return 'desc';
            if (prevOrder === 'desc') return '';
            return 'asc';
        });
    };

    return (
        <View style={styles.root}>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>

                <CounterRow favorites={favorites} />

                <View style={styles.tableContainer}>
                    <TableHeader sortOrder={sortOrder} onSortData={onSortData} />
                    {sortedData?.map((item) => <TableRow key={item.created} item={item} />)}
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