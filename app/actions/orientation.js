import Orientation from "react-native-orientation";

export function orientationHasChanged(orientation) {

    
    return {
        type: 'ORIENTATION_HAS_CHANGED',
        orientation: orientation
    };
}



 export function initOrientation() {
  
    return (dispatch) => {

   
        dispatch(orientationHasChanged(Orientation.getInitialOrientation()));


        Orientation.addOrientationListener(orientation => dispatch(orientationHasChanged(orientation)));
      }


  }

