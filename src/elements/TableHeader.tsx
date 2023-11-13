import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from "../redux/hooks";

interface IProps {
    sortOrder: 'asc' | 'desc' | 'none'
    onSortData: () => void
}

const TableHeader = ({ sortOrder, onSortData }: IProps) => {

    const { appLoading } = useAppSelector(state => state.loadingSlice)

    const defineArrowDirection = (sortOrder: 'asc' | 'desc' | 'none') => {
        if (sortOrder === 'asc') {
            return 'arrow-up-outline'
        }
        if (sortOrder === 'desc') {
            return 'arrow-down-outline'
        }
        else {
            return 'none'
        }
    }

    return (
        <View style={styles.headerContainer}>
            <Ionicons name={"heart"} size={24} />
            <Pressable onPress={onSortData} disabled={appLoading}>
                <Text style={styles.headerText}>
                    Name {sortOrder !== 'none' && <Ionicons name={defineArrowDirection(sortOrder)} size={16} />}
                </Text>
            </Pressable>
        </View>
    )
}

export default TableHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20,
        marginLeft: 16,
    },
});
