import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fans from "../components/Fans";
import HeaderTitle from "../elements/HeaderTitle";
import { Button } from "react-native";
import Character from "../components/Character";
import { useAppDispatch } from "../redux/hooks";
import { resetFavorites } from "../redux/slices/favoriteSlice";
import { ICharacter } from "../interfaces/character";
import { TRootStackParamList } from "../interfaces/navigation";

const Index = () => {

    const Stack = createNativeStackNavigator<TRootStackParamList>();

    const dispatch = useAppDispatch()

    const onResetFavorites = () => dispatch(resetFavorites())

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Fans">
                <Stack.Screen
                    name="Fans"
                    component={Fans}
                    options={{
                        headerTitle: (props) => <HeaderTitle title='Fans' {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={onResetFavorites}
                                title="Clear"
                                color="#F65449"

                            />)
                    }}
                />
                <Stack.Screen name="Character" component={Character} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index;