import React from 'react';
import { Text, View, Button, TouchableHighlight,StyleSheet, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {

  constructor(props) {
    super(props); //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
		console.log("HomeScreen loaded");
	}

  _onPressButton = (val) => {
   Alert.alert('You tapped the button!' + val)
 }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableHighlight onPress={ ()=> this._onPressButton("pass")} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


export default StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
},{

});

const styles = StyleSheet.create({
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// const HomeStack = () => {
// 	return StackNavigator(
//     Home: { screen: HomeScreen },
//     Details: { screen: DetailsScreen }
// 	);
// };


//
// class Home extends Component {
//
//   constructor(props) {
//     super(props); //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
//     this.state = {
//       date: new Date()
//     };
//   }
//   componentDidMount() {
// 		console.log("home loaded");
// 	}
// 	openView(_viewName) {
// 		//window.open(CONFIG.currentEnv.endpoint + _viewName, '_self', false); //open home
// 	}
//   render() {
//     return (
//       <div>
//         <div>
//           <h2>This is home</h2>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       </div>
//     );
//   }
// }
//
//
// export default Home;
