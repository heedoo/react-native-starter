/**
* React Navigation - https://reactnavigation.org/docs/en/getting-started.html
* Returns navgation options
*/
module.exports = {
  Nav : (params) => {
    var navOption = {
        initialRouteName : params.initialRouteName,
        //transitionConfig: () => ({ screenInterpolator: () => null }),
        navigationOptions: {
          title: params && params.title ? params.title : params.initialRouteName,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }
      }
    return navOption;
  }

}
