import { NewsContext } from '../NewsContext';

import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'

export const SearchListContext = createContext();
const SearchListProvider = (props) => {
    const { children } = props;
    const { searchNews, onSearch } = useContext(NewsContext);

    return (
        <SearchList.Provider value={{ user, loginUser, registerUser }}>
            {children}
        </SearchList.Provider>
    )
}

export default SearchList

const styles = StyleSheet.create({})
