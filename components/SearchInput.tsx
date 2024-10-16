import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const clearInput = () => {
        setSearchTerm('');
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor={Colors.ritual400}
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            {searchTerm.length > 0 && (
                <TouchableOpacity onPress={clearInput}>
                    <Ionicons name="close" size={20} style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        height: 44,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 14,
        backgroundColor: Colors.ritual100,
    },
    input: {
        flex: 1,
        paddingRight: 8,
        backgroundColor: Colors.ritual100,
    },
    icon: {
        marginHorizontal: 5,
        color: Colors.ritual400,
    },
});

export default SearchInput;