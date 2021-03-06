/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Feather, Foundation, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NewsScreen } from '../screens'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../theme'
import { Text } from '../components'

export type RootTabParamList = {
  NewsScreen: undefined
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function BottomTabNavigator() {
  const { colors, spacing } = useTheme<Theme>()

  return (
    // @ts-ignore
    <BottomTab.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          bottom: 40,
          borderRadius: 16,
          marginHorizontal: spacing.lg,
          paddingTop: 24,
          backgroundColor: '#1c1c1e',
          borderTopWidth: 0,
          flexDirection: 'column'
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primaryBlue,
        tabBarInactiveTintColor: colors.mainText
      }}
    >
      {/* @ts-ignore */}
      <BottomTab.Group screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
          name="NewsScreen"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                // @ts-ignore
                <Foundation
                  name="home"
                  size={24}
                  color = {color}
                />
              ) : (
                // @ts-ignore
                <Feather
                  name="home"
                  size={24}
                  color = {color}
                />
              ),
          }}
        />
        <BottomTab.Screen
          name="AnotherScreen"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                // @ts-ignore
                <Ionicons
                  name="ios-compass"
                  size={24}
                  color = {color}
                />
              ) : (
                // @ts-ignore
                <Ionicons
                  name="ios-compass-outline"
                  size={24}
                  color = {color}
                />
              ),
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  )
}
