import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { itemsSetComment } from "../actions/items"
import styles from "../styles/imgsDetails"

import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native";

class ImgsDetails extends Component {
    constructor(props) {
        super(props);

        this.selectedImg = this.props.navigation.state.params;
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={{ flex: 1 }}
                    source={{ uri: this.selectedImg.url }}
                />

                <View style={styles.commentContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.text = text}
                        value={this.selectedImg.comment}
                    />

                    <Button text={'ok'} style={styles.button} onPress={() => this.props.setComment({id: this.selectedImg.id, comment:this.text})}/>
                </View>
            </View>
        );
    }
}



const mapDispatchToProps = dispatch => {

    return {
        setComment: item => dispatch(itemsSetComment(item))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ImgsDetails);
