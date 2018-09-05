import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import ImgList from "../components/ImgList";
import Orientation from "react-native-orientation";
import { initOrientation } from "../actions/orientation";

class ImgsOverview extends Component {
     _nbColumns = 1;

/*

    _orientationDidChange = orientation => {
        this.setNbColumns(orientation);
        alert('changed')
    };

    componentWillMount() {
        this.setNbColumns(Orientation.getInitialOrientation());
        
    }
    componentWillUnmount() {
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    componentDidMount() {
        this.props.fetchData("/imgs");
        Orientation.addOrientationListener(this._orientationDidChange);
    }


    setNbColumns(orientation) {
        if (orientation === "LANDSCAPE") {
            this._nbColumns = 2;
        } else {
            this._nbColumns = 1;
        }
    }
*/
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
