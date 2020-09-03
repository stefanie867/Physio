import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import LanguageChangeScreen from '../screens/LanguageChangeScreen';
import { BottomTabParamList, TabOneParamList, LanguageChangeParamList } from '../types';
import { useTranslation } from 'react-i18next';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const {t} = useTranslation();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          title: t('app.nav.title.one')
        }}
      />
      <BottomTab.Screen
        name="LanguageChange"
        component={LanguageChangeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-globe" color={color} />,
          title: t('app.nav.title.languageChange')
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const {t} = useTranslation();
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: t('app.tab.title.one') }}
      />
    </TabOneStack.Navigator>
  );
}

const LanguageChangeStack = createStackNavigator<LanguageChangeParamList>();

function LanguageChangeNavigator() {
  const {t} = useTranslation();
  return (
    <LanguageChangeStack.Navigator>
      <LanguageChangeStack.Screen
        name="LanguageChangeScreen"
        component={LanguageChangeScreen}
        options={{ headerTitle: t('app.tab.title.languageChange') }}
      />
    </LanguageChangeStack.Navigator>
  );
}
