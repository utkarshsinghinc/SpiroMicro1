import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { BASE_URL } from "../constants/utils";
import DashB from "./DashB";
//import { BASE_URL } from "../constants/utils"

const Home = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    // get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                BASE_URL + "/patients"
            );
            const data = await apiResponse.json();
            setFakeData(data);
        };
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.root}>

            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            {(

                <DashB
                    searchPhrase={searchPhrase}
                    data={fakeData}
                    setClicked={setClicked}
                />

            )}
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
});