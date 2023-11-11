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
        navigation.navigate('Character', item)
    }

    return (
        <View style={styles.rowContainer}>
            <View style={styles.iconContainer}>
                <Pressable onPress={() => onFavoriteHandler(item)}>
                    <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={20}
                        color={'#F65449'} />
                </Pressable>
            </View>
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
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
        paddingVertical: 10,
    },
    iconContainer: {
        paddingHorizontal: 8,
        width: 42,
        verticalAlign: 'middle'
    },
    rowText: {
        flex: 1,
        fontSize: 16,
    },
});