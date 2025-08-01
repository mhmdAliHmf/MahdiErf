import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import COLORS from '../constants/theme';

function SubmitRequestScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !amount) {
      Alert.alert('خطا', 'لطفاً تمام فیلدها را پر کنید.');
      return;
    }
    // In a real app, you would send this data to a server.
    Alert.alert(
      'موفقیت',
      'درخواست شما با موفقیت ثبت شد. پس از بررسی با شما تماس گرفته خواهد شد.',
      [{ text: 'باشه', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>عنوان پروژه</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="مثال: تهیه غذا برای نیازمندان"
      />

      <Text style={styles.label}>توضیحات کامل</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="توضیحات کاملی در مورد پروژه و دلیل نیاز به کمک مالی بنویسید."
        multiline
      />

      <Text style={styles.label}>مبلغ مورد نیاز (تومان)</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="مثال: 5000000"
        keyboardType="numeric"
      />

      <Button title="ثبت نهایی درخواست" onPress={handleSubmit} color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'right',
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default SubmitRequestScreen;
