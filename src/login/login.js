import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';

class Login extends Component {

  constructor(props) {
    super(props); //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
		console.log("Login loaded");
	}
  handleLogin(event) {
    event.preventDefault()
    // do some login logic here, and if successful:
  }
	openView(_viewName) {
		//window.open(CONFIG.currentEnv.endpoint + _viewName, '_self', false); //open home
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


export default Login;
