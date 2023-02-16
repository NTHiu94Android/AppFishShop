import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
//import FlatListData from '../../../data/FlatListData';
import { NewsContext } from '../../news/NewsContext';


const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ flex: 1, flexDirection: 'column', padding: 4}}>
            <Image
                style={{flex: 1, width: 150, height: 96, borderRadius: 6, }}
                resizeMode='cover'
                source={{ uri: item.link, }} />
            <View style={{ flex: 1 }}>
                <Text
                    style={{ fontWeight: '400', fontSize: 13, lineHeight: 20, color: '#4e4b66' }}>
                    {item.field}
                </Text>
                {/* <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 24, color: '#000000', marginTop: 4, height: 48 }}>{item.title}</Text> */}
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 4, }}
                        resizeMode='cover'
                        source={{ uri: item.linkLogo, }} />
                    <Text style={{ fontWeight: '600', fontSize: 13, lineHeight: 20, color: '#4e4b66' }}>{item.channels}</Text>
                    <Image
                        style={{ width: 15, height: 15, marginLeft: 13, marginRight: 4 }}
                        resizeMode='cover'
                        source={{ uri: "https://banner2.cleanpng.com/20180410/cke/kisspng-computer-icons-history-icon-design-time-5acc8b322728f3.1831074915233544181604.jpg", }} />
                    <Text style={{ fontWeight: '600', fontSize: 13, lineHeight: 20, color: '#4e4b66' }}>{item.time}</Text>
                </View> */}
            </View>
        </View>


    </TouchableOpacity>
);

// const Item = ({ item, onPress }) => {
//     <TouchableOpacity onPress={onPress}>
//         <View style={{ flex: 1, flexDirection: 'column' }}>
//             <Image
//                 style={{ width: 96, height: 96, borderRadius: 6, marginRight: 4 }}
//                 resizeMode='cover'
//                 source={{ uri: item.link, }} />
//             <View style={{ flexDirection: 'column' }}>
//                 <Text style={{ fontWeight: '400', fontSize: 13, lineHeight: 20, color: '#4e4b66' }}>{item.field}</Text>
//             </View>
//         </View>
//     </TouchableOpacity>
// };

// const Item = ({ item, onPress }) => (
//     <TouchableOpacity onPress={onPress}>
//         <View style={{ flexDirection: 'row', padding: 8, }}>
//             <Image
//                 style={{ width: 96, height: 96, borderRadius: 6, marginRight: 4 }}
//                 resizeMode='cover'
//                 source={{ uri: item.image, }} />
//             <View style={{ flex: 1 }}>
//                 <Text
//                     style={{ fontWeight: '400', fontSize: 16, lineHeight: 24, color: '#000000', maxHeight: 48 }}>
//                     {item.title}
//                 </Text>
//                 <Text
//                     style={{ fontWeight: '400', fontSize: 13, lineHeight: 20, color: '#4e4b66', maxHeight: 44, marginTop: 4 }}>
//                     {item.content}
//                 </Text> 
//             </View>
//         </View>
//     </TouchableOpacity>
// );
const Home = (props) => {
    const { navigation } = props;
    const { news, onGetAll } = useContext(NewsContext);
    const [selectedId, setSelectedId] = useState('');
    const [keyword, setKeyword] = useState('');

    const seletedItem = (item) => {
        setSelectedId(item._id);
        console.log(item._id);
        navigation.navigate('Detail', { item: item })
        console.log("Homejs selectedId: ", selectedId);
    };

    const removeKeyword = () => {
        setKeyword('');
    }

    const handleSearch = (val) => {
        setKeyword(val);
        onSearch(val);
    }

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => seletedItem(item)}
            />
        );
    };

    // useEffect(async () => {
    //     await onGetAll();
    // }, []);

    const FlatListData = [
        {
            _id: "1",
            field: "Guppy1",
            title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "BBC News",
            time: "14m ago",
            link: "https://vatnuoi.vn/wp-content/uploads/2020/04/Ca-Betta--800x445.jpg?v=1621868126",
            linkLogo: "https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg",
        },
        {
            _id: "Guppy2",
            field: "Guppy2",
            title: "Her train broke down. Her phone died. And then she met her..",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "CNN",
            time: "14m ago",
            link: "https://demoda.vn/wp-content/uploads/2022/01/anh-ca-canh.jpg",
            linkLogo: "https://icons.iconarchive.com/icons/martz90/circle-addon1/512/cnn-icon.png",
        },
        {
            _id: "3",
            field: "Guppy3",
            title: "Russian warship: Moskva sinks in Black Sea",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "USA Today",
            time: "14m ago",
            link: "https://wikithuysinh.vn/wp-content/uploads/2022/03/2-ca-7-mau-rong-tim.png",
            linkLogo: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
        },
        {
            _id: "4",
            field: "Guppy4",
            title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "BBC News",
            time: "14m ago",
            link: "https://top247.vn/wp-content/uploads/2022/04/ca-7-mau-tphcm-4.jpg",
            linkLogo: "https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg",
        },
        {
            _id: "5",
            field: "Guppy5",
            title: "Her train broke down. Her phone died. And then she met her..",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "CNN",
            time: "14m ago",
            link: "https://aquaquanhta.com/wp-content/uploads/2021/11/7-mau-de-nuoi-1140x641.png",
            linkLogo: "https://icons.iconarchive.com/icons/martz90/circle-addon1/512/cnn-icon.png",
        },
        {
            _id: "6",
            field: "Guppy6",
            title: "Russian warship: Moskva sinks in Black Sea",
            description: "The Guppy is one of the most popular tropical fish on the market. They are bright and colourful which really stands out in any aquarium. This listing is for assorted plain-bodied female guppy with red tails (patterning may vary) which can be paired with colourful patterned males to produce similar offspring.",
            channels: "USA Today",
            time: "14m ago",
            link: "https://bucket.nhanh.vn/store/23894/ps/20180529/fullred_03_736x552.jpg",
            linkLogo: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
        },
        // {
        //     _id: "7",
        //     field: "Euro",
        //     title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
        //     channels: "BBC News",
        //     time: "14m ago",
        //     link: "https://vcdn1-vnexpress.vnecdn.net/2021/11/17/Thumb5301update-1637148485-4109-1637148490.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=3eFq0vp_1SJUl7PXMbR1Rw",
        //     linkLogo: "https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg",
        // },
        // {
        //     _id: "8",
        //     field: "Travel",
        //     title: "Her train broke down. Her phone died. And then she met her..",
        //     channels: "CNN",
        //     time: "14m ago",
        //     link: "https://i.ytimg.com/vi/yGL8JM8_0ZU/maxresdefault.jpg",
        //     linkLogo: "https://icons.iconarchive.com/icons/martz90/circle-addon1/512/cnn-icon.png",
        // },
        // {
        //     _id: "9",
        //     field: "Money",
        //     title: "Russian warship: Moskva sinks in Black Sea",
        //     channels: "USA Today",
        //     time: "14m ago",
        //     link: "https://cdn.baogiaothong.vn/upload/images/2022-3/article_avatar_img/2022-09-23/img-bgt-2021-220922204618-yoon-suk-yeol-file-092122-1663918947-width1280height720.jpg",
        //     linkLogo: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
        // },
        // {
        //     _id: "10",
        //     field: "Euro",
        //     title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
        //     channels: "BBC News",
        //     time: "14m ago",
        //     link: "https://photo-baomoi.bmcdn.me/w700_r16x9_sm/2022_09_23_23_43806941/09cdb28c75ce9c90c5df.jpg",
        //     linkLogo: "https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg",
        // },
        // {
        //     _id: "11",
        //     field: "Travel",
        //     title: "Her train broke down. Her phone died. And then she met her..",
        //     channels: "CNN",
        //     time: "14m ago",
        //     link: "https://i1-vnexpress.vnecdn.net/2020/12/01/w1900-h1328-x1716-y1200-AFP-fA-8415-6771-1606794001.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=xKTTnHevVgHQsNw0A89-gQ",
        //     linkLogo: "https://icons.iconarchive.com/icons/martz90/circle-addon1/512/cnn-icon.png",
        // },
        // {
        //     _id: "12",
        //     field: "Money",
        //     title: "Russian warship: Moskva sinks in Black Sea",
        //     channels: "USA Today",
        //     time: "14m ago",
        //     link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKD6pS4ZKdK93_dYxsGXaCMCOJRZsUEHNpg&usqp=CAU",
        //     linkLogo: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
        // },
    ];

    //console.log(news);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Main */}
                <View style={styles.main}>
                    {/* Logo home */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                        <Image
                            style={{ width: 70, height: 70 }}
                            resizeMode='cover'
                            source={require('../../../image/ic_profile2.jpg')} />
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '700', fontSize: 14, }}>Admin</Text>
                            <Text style={{ fontWeight: '400', fontSize: 13 }}>Good afternoon !!!</Text>
                        </View>

                    </View>

                    <View style={styles.searchContainer}>
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

                    <Text style={{ marginVertical: 8, fontWeight: '900', color: 'black', fontSize: 16 }}>Just in</Text>

                    {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} >
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://vatnuoi.vn/wp-content/uploads/2020/04/Ca-Betta--800x445.jpg?v=1621868126' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8  }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://demoda.vn/wp-content/uploads/2022/01/anh-ca-canh.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://wikithuysinh.vn/wp-content/uploads/2022/03/2-ca-7-mau-rong-tim.png' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://top247.vn/wp-content/uploads/2022/04/ca-7-mau-tphcm-4.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://aquaquanhta.com/wp-content/uploads/2021/11/7-mau-de-nuoi-1140x641.png' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://bucket.nhanh.vn/store/23894/ps/20180529/fullred_03_736x552.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>

                    </View> */}
                    {/* List newpaper */}
                    <FlatList
                        data={FlatListData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                        extraData={selectedId}
                        showsVerticalScrollIndicator={false}
                        // contentContainerStyle={{ alignSelf: 'flex-start' }}
                        // horizontal={false}
                        numColumns={2}
                    />

                    <Text style={{ marginVertical: 8, fontWeight: '900', color: 'black', fontSize: 16 }}>Yeezy</Text>

                    {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} >
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://vatnuoi.vn/wp-content/uploads/2020/04/Ca-Betta--800x445.jpg?v=1621868126' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://demoda.vn/wp-content/uploads/2022/01/anh-ca-canh.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://wikithuysinh.vn/wp-content/uploads/2022/03/2-ca-7-mau-rong-tim.png' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://top247.vn/wp-content/uploads/2022/04/ca-7-mau-tphcm-4.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://aquaquanhta.com/wp-content/uploads/2021/11/7-mau-de-nuoi-1140x641.png' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>
                        <View style={{ width: '50%', marginBottom: 8 }}>
                            <Image
                                style={{ width: '95%', height: 100, borderRadius: 10 }}
                                resizeMode='cover'
                                source={{ uri: 'https://bucket.nhanh.vn/store/23894/ps/20180529/fullred_03_736x552.jpg' }} />
                            <Text style={{ color: 'black', marginVertical: 2, fontWeight: '400', fontSize: 14 }}>Betta1</Text>
                        </View>

                    </View> */}
                    {/* List newpaper */}
                    <FlatList
                        data={FlatListData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                        extraData={selectedId}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    searchContainer: {
        position: 'relative',
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
    // Main
    main: {
        flex: 1,
        marginHorizontal: 24,
        paddingTop: 24,
        height: '100%',
    },
    // Footer
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#F7F7F5',
        position: 'absolute',
        flexWrap: 'wrap',
        paddingHorizontal: 26,
        bottom: 0,
    },
    childFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
    },
    tinyLogo: {
        width: 18,
        height: 18,
        marginBottom: 7,
    },
    textIcon: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
    }
})