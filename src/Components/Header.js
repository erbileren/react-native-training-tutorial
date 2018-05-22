import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Cryptocurrency List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#68b6c1",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff",
        paddingTop: 40,
        paddingBottom: 15
    }
});

const { headerContainer, header } = styles;

export default Header;
