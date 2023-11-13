import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    value: string
    onChange: (text: string) => void
}

const SearchInput = ({ value, onChange }: IProps) => {

    return (
        <View style={styles.container}>
            <Ionicons
                name={'search'}
                size={24} />
            <TextInput
                style={styles.input}
                value={value}
                placeholder="Search"
                onChangeText={onChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        paddingHorizontal: 10,
        fontSize: 20,
    },
});

export default SearchInput;
