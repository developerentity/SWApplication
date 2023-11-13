import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToFavorites, removeFromFavorites } from "../redux/slices/favoriteSlice";
import { ICharacter } from "../interfaces/character";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const TableRow = ({ item }: { item: ICharacter }) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation();
    const { favorites } = useAppSelector((state) => state.favoriteSlice);
    const isFavorite = favorites.some((favItem: ICharacter) => favItem.name === item.name)

    const onFavoriteHandler = (item: ICharacter) => {
        isFavorite
            ? dispatch(removeFromFavorites(item))
            : dispatch(addToFavorites(item))
    }

    const onOpenInfoHandler = (item: ICharacter) => {
        const route = ["Character", { item: item }]
        navigation.navigate(...(route as never))
    }

    return (
        <View style={styles.rowContainer}>
            <Pressable onPress={() => onFavoriteHandler(item)}>
                <Ionicons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={24}
                    color={'#F65449'} />
            </Pressable>
            <Text style={styles.rowText}>{item.name}</Text>
            <Pressable onPress={() => onOpenInfoHandler(item)}>
                <Text>More info...</Text>
            </Pressable>
        </View>
    );
}

export default TableRow;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        paddingVertical: 20,
        paddingHorizontal: 8,
    },
    rowText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 20,
    },
});