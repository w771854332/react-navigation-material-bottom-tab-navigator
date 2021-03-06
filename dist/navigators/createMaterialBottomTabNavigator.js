import * as React from 'react';
import BottomNavigation from 'react-native-paper/src/components/BottomNavigation';
import PaperProvider from 'react-native-paper/src/core/Provider';

import { createTabNavigator } from 'react-navigation-tabs';

class BottomNavigationView extends React.Component {
  _getColor = ({ route }) => {
    const { descriptors } = this.props;
    const descriptor = descriptors[route.key];
    const options = descriptor.options;

    return options.tabBarColor;
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { activeTintColor, navigation, descriptors, tabBarOptions = {}, ...rest } = this.props;
    if (!tabBarOptions.showLabel) {
      rest.renderLabel = () => null;
    }
    return <PaperProvider>
        <BottomNavigation {...rest} navigationState={navigation.state} getColor={this._getColor} theme={
      /* $FlowFixMe */
      activeTintColor ? { colors: { primary: activeTintColor } } : null} />
      </PaperProvider>;
  }
}

export default createTabNavigator(BottomNavigationView);