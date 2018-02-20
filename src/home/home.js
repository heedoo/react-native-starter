import React from 'react';
import { Text, View, Button, TouchableHighlight,StyleSheet, Alert,FlatList, ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {getUsers, getUsers2} from './homeService';
import { ListItem } from 'react-native-elements';


class Users extends React.Component {
  state = {
    seed: 1,
    page: 1,
    users: [],
    isLoading: false,
    isRefreshing: false,
  };

  componentDidMount() {
    this.loadUsers();
  };

  loadUsers = () => {
    const { users, seed, page } = this.state;
    this.setState({ isLoading: true });

    fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: page === 1 ? res.results : [...users, ...res.results],
          isRefreshing: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleRefresh = () => {
    this.setState({
      seed: this.state.seed + 1,
      isRefreshing: true,
    }, () => {
      this.loadUsers();
    });
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadUsers();
    });
  };



  render() {
    const { users, isRefreshing } = this.state;

    return (
      <View style={styles.scene}>
        {
          users &&
            <FlatList
              data={users}
              renderItem={({item}) => (
                <ListItem
                  roundAvatar
                  title={item.name.first}
                  subtitle={item.email}
                  avatar={{uri: item.picture.thumbnail}}
                />
              )}
              keyExtractor={i => i.email}
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndThreshold={0}
            />
        }
      </View>
    )
  }
}



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
		console.log("HomeScreen loaded!");
    getUsers2().then((res)=>{
      console.log(JSON.stringify(res));
    }, (err)=>{
      console.log(err)
    })
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
        <FlatList
         data={[{key: 'a'}, {key: 'b'}]}
         renderItem={({item}) => <Text>{item.key}</Text>}
         />
      </View>
    );
  }
}


export default StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: Users }
},{

});

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,//Constants.statusBarHeight,
    backgroundColor: '#eee',
  },
  loading: {
    margin: 50,
  },
  fullApp: {
    margin: 20,
    textAlign: 'center',
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  scene: {
    flex: 1,
    paddingTop: 25,
  },
  user: {
    width: '100%',
    backgroundColor: '#333',
    marginBottom: 10,
    paddingLeft: 25,
  },
  userName: {
    fontSize: 17,
    paddingVertical: 20,
    color: '#fff'
  }
});

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
