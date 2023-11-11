import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TableHeader = () => (
    <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
            <Ionicons name={"heart"} size={20} />
        </View>
        <Text style={styles.headerText}>Name</Text>
    </View>
);

export default TableHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: '#E0E0E0',
    },
    iconContainer: {
        paddingHorizontal: 8,
        width: 42,
        verticalAlign: 'middle'
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
});
