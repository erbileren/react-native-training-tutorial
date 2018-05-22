import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../Actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends Component {
    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto);

        return crypto.data.map((coin, index) => (
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        ));
    }

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{ color: "#253145" }}
                        animation="fade"
                    />
                </View>
            );
        }

        return (
            <ScrollView style={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    };
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: 60,
        paddingTop: 10
    }
  });
  
  const {
    contentContainer
  } = styles;

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
