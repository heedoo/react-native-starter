import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Tabs from './src/tabs';

class App extends React.Component {
  render() {
    return (
      <Tabs/>
    );
  }
}
export default StackNavigator({
  App: { screen: Tabs },
  //Login: { screen: Login },
},{
    initialRouteName: 'App',
    headerMode: 'none',//headerMode: 'screen',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerVisible: false,
    }
  });
//export default () => <AppStack />;


// import React from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
// import { HomeStack } from './src/home';
//
// import Ionicons from 'react-native-vector-icons/Ionicons';
//
// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={{uri:"http://placehold.it/30x30&text=image1"}}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }
//
// class DetailsScreen extends React.Component {
//
//   static navigationOptions = ({ navigation }) => {
//     const { params } = navigation.state;
//
//     return {
//       title: params ? params.otherParam : 'A Nested Details Screen',
//     }
//   };
//   static navigationOptions = {
//     headerTitle: <LogoTitle />,
//     headerRight: (
//       <Button
//         onPress={() => alert('This is a button!')}
//         title="Info"
//         color="#fff"
//       />
//     ),
//   };
//
//   render() {
//     /* 2. Read the params from the navigation state */
//     const { params } = this.props.navigation.state;
//     const itemId = params ? params.itemId : null;
//     const otherParam = params ? params.otherParam : null;
//
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }
//
// // class HomeScreen extends React.Component {
// //   static navigationOptions = {
// //     title: 'Home',
// //     headerStyle: {
// //       backgroundColor: '#f4511e',
// //     },
// //     headerTintColor: '#fff',
// //     headerTitleStyle: {
// //       fontWeight: 'bold',
// //     },
// //   };
// //
// //   render() {
// //     return (
// //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //         <Text>Home!</Text>
// //         <Button
// //           title="Go to Details"
// //           onPress={() => this.props.navigation.navigate('Details', {
// //               itemId: 86,
// //               otherParam: 'title here',
// //             })
// //           }
// //         />
// //       </View>
// //     );
// //   }
// // }
//
// class SettingsScreen extends React.Component {
//   static navigationOptions = {
//     headerTitle: <LogoTitle />,
//     headerRight: (
//       <Button
//         onPress={() => alert('This is a button!')}
//         title="Info"
//         color="#fff"
//       />
//     ),
//   };
//
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         { /* other code from before here */ }
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }
//
// // const HomeStack = StackNavigator({
// //   Home: { screen: HomeScreen },
// //   Details: { screen: DetailsScreen },
// // },
// // {
// //     initialRouteName: 'Home',
// //     /* The header config from HomeScreen is now here */
// //     navigationOptions: {
// //       headerStyle: {
// //         backgroundColor: '#f4511e',
// //       },
// //       headerTintColor: '#fff',
// //       headerTitleStyle: {
// //         fontWeight: 'bold',
// //       },
// //     },
// //   });
//
// const SettingsStack = StackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });
//
//
// export default TabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack },
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }
//
//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         //return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false,
//   },
// );
