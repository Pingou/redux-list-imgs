import React, { Component } from "react";
import { connect } from "react-redux";

import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native";

class Button extends Component {
   

    render() {
        return (
            <TouchableOpacity style={[{ flex: 1 }, this.props.style]} onPress={() => this.props.onPress()}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
