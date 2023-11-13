import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    sortOrder: 'asc' | 'desc' | ''
    onSortData: () => void
}

const TableHeader = ({ sortOrder, onSortData }: IProps) => {

    const defineArrowDirection = (sortOrder: 'asc' | 'desc' | '') => {
        if (sortOrder === 'asc') {
            return 'arrow-up-outline'
        }
        if (sortOrder === 'desc') {
            return 'arrow-down-outline'
        } else {
            return ''
        }
    }

    return (
        <View style={styles.headerContainer}>
            <Ionicons name={"heart"} size={24} />
            <Pressable onPress={onSortData}>
                <Text style={styles.headerText}>
                    Name <Ionicons name={defineArrowDirection(sortOrder)} size={16} />
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
