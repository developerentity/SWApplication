import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TableHeader = () => (
    <View style={styles.headerContainer}>
        <Ionicons name={"heart"} size={24} />
        <Text style={styles.headerText}>Name</Text>
    </View>
);

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
