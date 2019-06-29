/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import PeopleList from './PeopleList'
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const TabNavigator = createBottomTabNavigator({
  PeopleList: { screen: PeopleList },
  AddPerson: { screen: AddPerson },
  CompanyList: { screen: CompanyList }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#80cbc4',
    swipeEnabled: true,
    showLabel: false,
    style: {
      backgroundColor: '#26a69a',
    },
  },
});

// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
//   let iconName;
//   if (routeName === 'PeopleList') {
//     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//     // We want to add badges to home tab icon
//     IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'AddPerson') {
//     iconName = `ios-options${focused ? '' : '-outline'}`;
//   } else if (routeName === 'CompanyList') {
//     iconName = `ios-options${focused ? '' : '-outline'}`;
//   }

//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={25} color={tintColor} />;
// };

export default createAppContainer(TabNavigator);