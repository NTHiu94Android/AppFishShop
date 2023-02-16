import { StyleSheet, Text, View, TextInput, Image, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../NewsContext';

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', padding: 8, }}>
            <Image
                style={{ width: 96, height: 96, borderRadius: 6, marginRight: 4 }}
                resizeMode='cover'
                source={{ uri: item.image, }} />
            <View style={{ flex: 1 }}>
                <Text
                    style={{ fontWeight: '400', fontSize: 16, lineHeight: 24, color: '#000000', maxHeight: 48 }}>
                    {item.title}
                </Text>
                <Text
                    style={{ fontWeight: '400', fontSize: 13, lineHeight: 20, color: '#4e4b66', maxHeight: 44, marginTop: 4 }}>
                    {item.content}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);
const Search = (props) => {
    const { navigation } = props;
    const { searchNews, onSearch } = useContext(NewsContext);
    const [keyword, setKeyword] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const removeKeyword = () => {
        setKeyword('');
    }

    const handleSearch = (val) => {
        setKeyword(val);
        onSearch(val);
    }

    console.log(searchNews);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item._id)}
            />
        );
    };

    return (
        <View style={styles.container}>
            {/* <View style={styles.searchContainer}>
                <Image
                    style={styles.iconSearch}
                    resizeMode='cover'
                    source={require('../../../image/ic_search.png')} />
                <TextInput
                    placeholder="Search"
                    value={keyword}
                    onChangeText={handleSearch}
                    style={styles.input}
                />
                {
                    keyword.length > 0 &&
                    <Pressable style={styles.iconRemove} onPress={removeKeyword}>
                        <Image
                            style={{ width: 14, height: 14 }}
                            resizeMode='cover'
                            source={require('../../../image/ic_remove.png')} />
                    </Pressable>
                }
            </View>

            <FlatList
                data={searchNews}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
            /> */}

        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    main: {
        flex: 1,
        marginHorizontal: 24,
        paddingTop: 24,
        height: '100%',
    },
    iconSearch: {
        width: 24, height: 24,
        position: 'absolute',
        left: 10,
        top: 8,
    },
    iconRemove: {
        width: 14, height: 14,
        position: 'absolute',
        top: 13,
        right: 10,
    },
    input: {
        height: 40,
        width: '100%',
        // backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 40,
    },
    searchContainer: {
        position: 'relative',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 8
    }
})