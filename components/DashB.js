import React, { useState, useEffect } from "react";
//import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { withNavigation } from "react-navigation"
import { useNavigation } from "@react-navigation/native";




const DashB = ({ searchPhrase, setClicked, data }) => {

    //const navigation = useNavigation();
    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // const fetchData = async () => {
    //     const resp = await fetch("http://localhost:4000/patients");
    //     const data = await resp.json();
    //     setData(data);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }

    async function handleDeleteUser(id) {
        const requestOptions = {
            method: 'DELETE',
            // headers: authHeader()
        };

        const response = await fetch(`http://localhost:4000/patients/${id}`, requestOptions);
        return handleResponse(response);
    }

    // const showConfirmDialog = () => {
    //     return Alert.alert(
    //         "Are your sure?",
    //         "Are you sure you want to delete Patient?",
    //         [
    //             // The "Yes" button
    //             {
    //                 text: "Yes",
    //                 onPress: () => {
    //                     handleDeleteUser(dlt)
    //                 },
    //             },
    //             // The "No" button
    //             // Does nothing but dismiss the dialog when tapped
    //             {
    //                 text: "No",
    //             },
    //         ]
    //     );
    // };
    const Item = ({ item, onPress, backgroundColor, textColor, name, details, uhid, user, dlt }) => {
        const navigation = useNavigation();
        return (

            <TouchableOpacity onPress={() => navigation.navigate("Testing")} style={[styles.item, backgroundColor]}>
                {/* <Text style={[styles.title, textColor]}>{item.fname} {item.sname}</Text> */}
                <Text style={styles.txt}>{uhid} </Text>
                <Text style={styles.txt}>{name} </Text>
                <Text style={styles.txt}>{details}</Text>

                <TouchableOpacity onPress={() => handleDeleteUser(dlt)} style={styles.dltTo} >
                    <Image style={styles.delete} source={require("../assets/delete.png")} />
                </TouchableOpacity>

            </TouchableOpacity>


        )
    };
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#5a6373" : "black";
        const color = item.id === selectedId ? 'white' : 'black';
        if (item.uhid.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} textColor={{ color }} name={item.fname} details={item.sname} uhid={item.uhid} dlt={item.id} />;
        }
        // filter of the description
        if (item.fname.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} textColor={{ color }} name={item.fname} details={item.sname} uhid={item.uhid} dlt={item.id} />;
        }
        if (item.sname.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} textColor={{ color }} name={item.fname} details={item.sname} uhid={item.uhid} dlt={item.id} />;
        }
        // return (
        //     <Item
        //         item={item}
        //         onPress={() => setSelectedId(item.id)}
        //         backgroundColor={{ backgroundColor }}
        //         textColor={{ color }}
        //     />

        // )
    };

    return (

        <SafeAreaView style={styles.container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />

            </View>
        </SafeAreaView>
    );
}

export default DashB;
const styles = StyleSheet.create({
    container: {

        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        padding: 20,
        marginVertical: 8,

        flexDirection: "row",
        width: "100%"
    },
    title: {
        fontSize: 32,
    },
    txt: {
        color: "white"
    },
    delete: {
        width: 30,
        height: 30,
        alignSelf: "flex-end"
    },
    dltTo: {
        alignSelf: "flex-end"
    }
});