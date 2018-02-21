import React from 'react';
import { Text, View, Button, TouchableHighlight,StyleSheet, Alert,FlatList, ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Loader from '../shared/loader';
import {getUsers, getUsers2} from './homeService';
import { ListItem } from 'react-native-elements';

/* list item */
class Row extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

/* HomeScreen */
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seed: 1,
      page: 1,
      users: [],
      isLoading: false,
      isRefreshing: false,
      date: new Date(),
      loading : false
    };
  }

  componentDidMount() {
    console.log("HomeScreen loaded!");
    // this.setState({
    //   loading: true
    // });

    this.loadUsers();

    // setTimeout(()=>{
    //   this.setState({
    //     loading: false
    //   });
    // }, 3000)


  };


  loadUsers = () => {
    const { users, seed, page } = this.state;
    this.setState({ isLoading: true, loading: true });

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

/*
      getUsers({page:this.state.page, results:this.state.results}).then((res)=>{
        //console.log(JSON.stringify(res));

        this.setState({
          users: page === 1 ? res.results : [...users, ...res.results],
          isRefreshing: false,
        });

        //setTimeout(()=>{
          //this.setState({
            //loading: false
          //});
        //}, 3000)

      }).catch((err) => {
      console.log(err)
      });
*/
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

  _onPressButton = (val) => {
    Alert.alert('You tapped the button!' + val)
  }

  render() {

    const { users, isRefreshing } = this.state;

    return (
      <View style={styles.scene}>
      {/*<Loader loading={this.state.loading} />*/}

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

/*
return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Loader loading={this.state.loading} />
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
*/

export default StackNavigator({
  Home: { screen: HomeScreen },
  //Details: { screen: Users }
},{
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      title:"Home",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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


/*
//https://facebook.github.io/react-native/docs/flatlist.html
class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

*/
