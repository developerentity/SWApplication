import { Pressable, StyleSheet, Text } from "react-native"

interface IProps {
    title: string,
    onPress: () => void
}

const CustomButton = ({ onPress, title }: IProps) => {

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#fff' : '#F2F2F2',
                },
                styles.wrapperCustom,
            ]}>
            {({ pressed }) => (
                <Text style={styles.text}>{title}</Text>
            )}
        </Pressable>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        padding: 8,
        borderColor: '#F65449',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
        color: '#F65449',
    },
})