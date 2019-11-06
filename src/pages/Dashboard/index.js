import React from 'react';
import { Text } from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function Dashboard() {
  return (
    <Background>
      <Text>DASHBOARD</Text>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
