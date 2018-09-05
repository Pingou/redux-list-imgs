import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import ImgList from "../components/ImgList";

class ImgsOverview extends Component {
    componentDidMount() {
        this.props.fetchData("/imgs");
    }

    onImgSelected(img) {
        this.props.navigation.navigate('ImgsDetails', img);
    }

    render() {

        return <ImgList onImgSelected={(img) => this.onImgSelected(img)}/>;
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImgsOverview);
