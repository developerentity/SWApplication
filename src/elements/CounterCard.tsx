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
        padding: 2,
    },
    count: {
        fontSize: 40,
    },
    title: {

    }
})