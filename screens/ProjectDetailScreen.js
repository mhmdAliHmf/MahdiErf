import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import COLORS from '../constants/theme';

function ProjectDetailScreen({ route, navigation }) {
  const { project } = route.params;
  const [donationAmount, setDonationAmount] = useState('');

  const progress = (project.amountRaised / project.targetAmount) * 100;

  const handlePayment = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      Alert.alert('خطا', 'لطفاً مبلغ معتبری برای کمک وارد کنید.');
      return;
    }
    navigation.navigate('Payment', {
      amount: parseFloat(donationAmount),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>

        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {`${Math.round(progress)}% از هدف تکمیل شده`}
        </Text>
        <Text style={styles.amountText}>
          {`مبلغ جمع‌آوری شده: ${project.amountRaised.toLocaleString('fa-IR')} تومان`}
        </Text>
        <Text style={styles.amountText}>
          {`هدف: ${project.targetAmount.toLocaleString('fa-IR')} تومان`}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.donateTitle}>می‌خواهم کمک کنم</Text>
        <TextInput
          style={styles.input}
          placeholder="مبلغ کمک خود را وارد کنید (تومان)"
          keyboardType="numeric"
          value={donationAmount}
          onChangeText={setDonationAmount}
        />
        <Button
          title="پرداخت"
          onPress={handlePayment}
          color={COLORS.primary}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 16,
    color: COLORS.primary,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'right',
    marginBottom: 24,
  },
  progressContainer: {
    height: 20,
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: 10,
  },
  progressText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  amountText: {
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 4,
  },
  donateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'right',
  },
});

export default ProjectDetailScreen;
