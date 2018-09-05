import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import ImgList from "../components/ImgList";
import Orientation from "react-native-orientation";
import { initOrientation } from "../actions/orientation";

class ImgsOverview extends Component {

    getNbColumns() {
        if (this.props.orientation === "LANDSCAPE") {
           return 2;
        } else {
            return 1;
        }
    }

   componentWillMount() {
        this.props.initOrientation();
    } 
    componentDidMount() {
        this.props.fetchData("/imgs");
    }

    onImgSelected(img) {
        this.props.navigation.navigate('ImgsDetails', img);
    }

    render() {
        console.log('nbColumns ' + this.getNbColumns())
        return <ImgList key={"flatList" + this.getNbColumns()} nbColumns={this.getNbColumns()} onImgSelected={(img) => this.onImgSelected(img)}/>;
    }
}


const mapStateToProps = state => {
    return {
        orientation: state.orientation,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url)),
        initOrientation: () => dispatch(initOrientation())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImgsOverview);
