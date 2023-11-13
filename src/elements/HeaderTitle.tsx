import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { useAppSelector } from "../redux/hooks";

const HeaderTitle = ({ title }: { title: string }) => {

    const { appLoading } = useAppSelector((state) => state.loadingSlice);

    if (appLoading) {
        return <ActivityIndicator size="large" />
    }

    return <Text style={styles.text}>{title}</Text>
}

export default HeaderTitle

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
})