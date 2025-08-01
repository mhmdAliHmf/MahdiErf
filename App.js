import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens that will be created in the next steps
import HomeScreen from './screens/HomeScreen';
import ProjectsListScreen from './screens/ProjectsListScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';
import SubmitRequestScreen from './screens/SubmitRequestScreen';
import PaymentScreen from './screens/PaymentScreen';

import COLORS from './constants/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'اپلیکیشن خیریه' }}
        />
        <Stack.Screen
          name="ProjectsList"
          component={ProjectsListScreen}
          options={{ title: 'لیست پروژه‌ها' }}
        />
        <Stack.Screen
          name="ProjectDetail"
          component={ProjectDetailScreen}
          options={{ title: 'جزئیات پروژه' }}
        />
        <Stack.Screen
          name="SubmitRequest"
          component={SubmitRequestScreen}
          options={{ title: 'ثبت درخواست جدید' }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: 'پرداخت' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
