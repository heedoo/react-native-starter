


/**
 *
 */
module.exports = {
  ui: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',//F5FCFF
    },
		borderRadius: {
			base:         '.33em',
			sm:           '.25em',
			lg:            '.5em'
		},
		color: {
			bodyBackground:   '#fefefe',
			primary:          '#31adb8',
			danger:           '#d64242',
			info:             '#56cdfc',
			success:          '#52cc5c',
			warning:          '#fa9f47'
		},
		component: {
			height:     '2.4em',
			lineHeight: '2.3em',
			padding:    '1em'
		},
		fontSize: {
			base:    '14px',
			large:   '18px',
			small:   '12px',
			xsmall:  '10px'
		},
    buttonTheme :{
      backgroundColor: "rgba(92, 99,216, 1)",
      width: "100%",
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5
    }
	}
}


/*
import {
  StyleSheet,
} from 'react-native';

const absoluteStretch = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

module.exports = StyleSheet.create({
  container: {
    ...absoluteStretch,
    justifyContent: 'center',
  },
  menu: {
    ...absoluteStretch,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  overlay: {
    ...absoluteStretch,
    backgroundColor: 'transparent',
  },
});
*/
