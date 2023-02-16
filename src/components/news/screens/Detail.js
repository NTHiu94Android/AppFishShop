import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../NewsContext';


const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ flex: 1, flexDirection: 'column', padding: 4 }}>
            <Image
                style={{ flex: 1, width: 150, height: 96, borderRadius: 6, }}
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
const Detail = ({ navigation, route }) => {
    //const _id = "6316bb7d562ab100165ade3b";
    const { item } = route.params;
    console.log("Detail item: ");
    console.log(item);
    const [selectedId, setSelectedId] = useState('');
    //const { onGetOneNews, image, title, content } = useContext(NewsContext);

    // useEffect(async () => {
    //     const response = await onGetOneNews(_id);
    //     return () => { response }
    // }, []);
    const btnLogin = () => {

    };

    const seletedItem = (item) => {
        setSelectedId(item._id);
        console.log(item._id);
        //navigation.navigate('Detail', { item: item })
        //console.log("Homejs selectedId: ", selectedId);
    };

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => seletedItem(item)}
            />
        );
    };

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Relative */}
            <View style={{ marginHorizontal: 24, position: 'relative', }}>
                {/* Header */}
                <View style={[styles.header, { marginTop: 20, marginBottom: 20 }]}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={styles.tinyLogo}
                            resizeMode='cover'
                            source={require('../../../image/ic_back512black.png')} />
                        <Text style={{marginLeft: 8, fontWeight: '800', fontSize: 18}}>{item.field}</Text>
                    </View>

                    <View style={styles.header}>
                        <Image
                            style={styles.tinyLogo}
                            resizeMode='cover'
                            source={require('../../../image/ic_share512.png')} />
                        <Image
                            style={[styles.tinyLogo, { marginLeft: 22 }]}
                            resizeMode='cover'
                            source={require('../../../image/ic_option512_2.png')} />
                    </View>

                </View>

                {/* Main */}
                <ScrollView style={{ marginBottom: 70 }} showsVerticalScrollIndicator={false}>
                    <View>
                        {/* Info */}
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                           
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    style={{ width: 50, height: 50, marginRight: 4 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_newspaper512.png')} />
                                <View>
                                    <Text style={{ fontWeight: '600', fontSize: 16, lineHeight: 24, color: 'black' }}>BBC News</Text>
                                    <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 21, color: '#4E4B66' }}>14m ago</Text>
                                </View>
                            </View>
                            
                            <Pressable style={styles.wrapperCustom}>
                                <Text style={styles.textPressable}>Following</Text>
                            </Pressable>
                        </View> */}

                        {/* Image main */}
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 6, marginTop: 16 }}
                            resizeMode='cover'
                            source={{
                                uri: item.link,
                                //uri: 'https://file3.qdnd.vn/data/images/0/2022/04/18/nguyenthao/tau%20san%20bay.jpg?dpi=150&quality=100&w=870',
                            }}
                        />
                        {/* Euro */}
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 16, marginTop: 16 }}>{item.field}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ marginVertical: 8, width: '30%', marginRight: 4 }}>
                                <TouchableOpacity
                                    style={[styles.wrapperCustom, { width: '100%', backgroundColor: 'rgb(44,44,44)' }]}
                                    onPress={() => btnLogin()}>
                                    <Text style={styles.textPressable}>Male</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 8, width: '65%' }}>
                                <TouchableOpacity
                                    style={[styles.wrapperCustom, { width: '100%', backgroundColor: 'rgb(44,44,44)' }]}
                                    onPress={() => btnLogin()}>
                                    <Text style={styles.textPressable}>Buy for $338</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Title text*/}
                        {/* <Text style={{ color: '#000000', fontWeight: '400', fontSize: 24, lineHeight: 36, marginTop: 4 }}>
                            Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil
                        </Text> */}
                        {/* Main text*/}
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 18, lineHeight: 24, marginTop: 8, textAlign: 'center' }}>
                            Description
                            {/* {content} */}
                        </Text>
                        <Text style={{ color: '#4E4B66', fontWeight: '400', fontSize: 14, lineHeight: 24, marginTop: 4 }}>
                            {item.description}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 18, lineHeight: 24, marginTop: 8, textAlign: 'center' }}>Recommended</Text>
                    </View>
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
                </ScrollView>

            </View>



            {/* Absolute - bottomNavigation */}
            {/* <View style={styles.footer}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            resizeMode='cover'
                            source={{ uri: item.link }} />
                        <Text style={{ marginLeft: 6, fontWeight: '400', fontSize: 16 }}>24.5K</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20 }}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            resizeMode='cover'
                            source={require('../../../image/ic_comment512.png')} />
                        <Text style={{ marginLeft: 6, fontWeight: '400', fontSize: 16 }}>34.5K</Text>
                    </View>
                </View>

                
                <Image
                    style={{ width: 20, height: 20 }}
                    resizeMode='cover'
                    source={require('../../../image/ic_bookmark512_2.png')} />
            </View> */}
        </SafeAreaView>
    )
}

export default Detail

const styles = StyleSheet.create({
    // Footer
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 0,
    },
    wrapperCustom: {
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 11,
        width: 102,
        height: 34,
        backgroundColor: '#1877F2'
    },
    textPressable: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Poppins',
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 18,
        height: 18,
    },
})