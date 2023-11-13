import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToFavorites, removeFromFavorites } from "../redux/slices/favoriteSlice";
import { ICharacter } from "../interfaces/character";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../interfaces/navigation";


const TableRow = ({ item }: { item: ICharacter }) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<ScreenNavigationProp>();
    const { favorites } = useAppSelector((state) => state.favoriteSlice);
    const isFavorite = favorites.some((favItem: ICharacter) => favItem.name === item.name)

    const onFavoriteHandler = (item: ICharacter) => {
        isFavorite
            ? dispatch(removeFromFavorites(item))
            : dispatch(addToFavorites(item))
    }

    const onOpenInfoHandler = (item: ICharacter) => {
        navigation.navigate('Character', { selectedCharacter: item });
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
                <Ionicons
                    name={"ellipsis-horizontal-sharp"}
                    size={24}
                    color={'#027AFF'} />
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