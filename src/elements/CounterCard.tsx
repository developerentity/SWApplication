import { StyleSheet, Text, View } from "react-native"


const CounterCard = ({ title, count }: { title: string, count: number }) => {

    return (
        <View style={styles.root}>
            <Text style={styles.count}>{count}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default CounterCard;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    count: {
        fontSize: 32,
    },
    title: {
    }
})