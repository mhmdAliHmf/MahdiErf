import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import COLORS from '../constants/theme';

function PaymentScreen({ route, navigation }) {
  const { amount } = route.params;

  const handleConfirm = () => {
    Alert.alert(
      'پرداخت موفق',
      'از کمک شما سپاسگزاریم. اجرتان با خدا.',
      [
        {
          text: 'بازگشت به صفحه اصلی',
          onPress: () =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            }),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>تایید پرداخت</Text>
      <Text style={styles.amountLabel}>مبلغ پرداختی شما:</Text>
      <Text style={styles.amount}>{`${amount.toLocaleString('fa-IR')} تومان`}</Text>

      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          توجه: ۵٪ از مبلغ اهدایی شما به عنوان کارمزد کسر می‌گردد.
        </Text>
      </View>

      <Button
        title="تایید و پرداخت نهایی"
        onPress={handleConfirm}
        color={COLORS.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 32,
  },
  amountLabel: {
    fontSize: 18,
    color: COLORS.gray,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 32,
  },
  noticeBox: {
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 32,
  },
  noticeText: {
    color: '#5D4037',
    textAlign: 'center',
  },
});

export default PaymentScreen;
