import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import COLORS from '../constants/theme';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>اپلیکیشن خیریه</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="کمک مالی"
          onPress={() => navigation.navigate('ProjectsList')}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="ثبت درخواست"
          onPress={() => navigation.navigate('SubmitRequest')}
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 64,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});

export default HomeScreen;
