import { StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getCharacterOnPage } from "../redux/slices/characterSlice";
import TableHeader from "../elements/TableHeader";
import TableRow from "../elements/TableRow";
import CounterRow from "../elements/CounterRow";
import { ICharacter } from "../interfaces/character";
import SearchInput from "../elements/SearchInput";

const Fans = () => {

    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector((state) => state.loadingSlice);
    const { characters, isLastPage } = useAppSelector((state) => state.characterSlice);
    const { favorites } = useAppSelector((state) => state.favoriteSlice);
    const [page, setPage] = useState(1)
    const [processedData, setProcessedData] = useState<Array<ICharacter>>([]);

    useEffect(() => {
        if (!appLoading && !isLastPage) {
            dispatch(getCharacterOnPage(page));
            setSortOrder('none');
        }
    }, [page])

    useEffect(() => {
        setProcessedData(characters)
    }, [characters])

    const handleScroll = (
        event: NativeSyntheticEvent<NativeScrollEvent>,
    ) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;

        const paddingToBottom = 60;

        if (scrollViewHeight + offsetY >= contentHeight - paddingToBottom) {
            if (!appLoading && !isLastPage) {
                setPage(page + 1)
            }
        }
    }

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

    const handleSort = () => {
        switch (sortOrder) {
            case 'asc':
                setSortOrder('desc');
                break;
            case 'desc':
                setSortOrder('none');
                break;
            default:
                setSortOrder('asc');
                break;
        }
    };

    const changeOrder = () => {
        let sortedData: Array<ICharacter> = [];

        switch (sortOrder) {
            case 'asc':
                sortedData = [...processedData].sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
                break;
            case 'desc':
                sortedData = [...processedData].sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;
            default:
                sortedData = processedData;
                break;
        }

        setProcessedData(sortedData);
    };

    useEffect(() => {
        changeOrder()
    }, [sortOrder])

    const [searchString, setSearchString] = useState('')

    const handleSearch = (text: string) => {
        setSearchString(text)
        const filtered = characters.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setProcessedData(filtered);
    };

    return (
        <View style={styles.root}>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>

                <CounterRow favorites={favorites} />

                <View style={styles.container}>
                    <SearchInput value={searchString} onChange={handleSearch} />
                </View>

                <View style={styles.container}>
                    <TableHeader sortOrder={sortOrder} onSortData={handleSort} />
                    {processedData.map((item) => <TableRow key={item.name} item={item} />)}
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
    container: {
        marginTop: 8,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#fff',
    }
})