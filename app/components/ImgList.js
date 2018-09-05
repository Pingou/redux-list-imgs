import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsSelectImg } from "../actions/items";
import ImgThumbnail from "./ImgThumbnail";
import styles from "../styles/imgList";


import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from "react-native";

class ImgList extends Component {
    renderItem(item) {
        return (
            <ImgThumbnail
                url={item.url}
                onPress={() => this.props.onImgSelected(item)}
            />
        );
    }

    render() {

        if (this.props.hasErrored) {
            return <Text>error</Text>;
        }

        if (this.props.isLoading) {
            return <ActivityIndicator />;
        }

        return (
            <FlatList
                style={styles.container}
                data={this.props.items}
                extraData={this.state}
                numColumns={this.props.nbColumns}
                keyExtractor={(item, index) => "thumb_" + item.id}
                renderItem={item => this.renderItem(item.item)}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        showImg: img => dispatch(itemsSelectImg(img))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImgList);
