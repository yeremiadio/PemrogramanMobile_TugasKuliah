/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
  Alert,
  View,
} from 'react-native';
import {Content, Form, Button, Label, Container, Textarea} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Body, Left, Right, Title} from 'native-base';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const FormData = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState();
  const [date, setDate] = useState(new Date());
  const [userPassword, setUserPassword] = useState('');
  const [checked, setChecked] = React.useState();

  const confirmSubmit = () =>
    Alert.alert(
      'Konfirmasi',
      'Apakah anda yakin?',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('', 'Data gagal disimpan'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => Alert.alert('', 'Data berhasil disimpan')},
      ],
      {cancelable: false},
    );

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Body>
          <Title
            style={{
              marginLeft: 10,
              fontFamily: 'Nunito-Bold',
              letterSpacing: 0.7,
            }}>
            Formulir Data Diri
          </Title>
        </Body>
        <Right />
      </Header>
      <ScrollView>
        <Form
          style={{
            padding: 15,
            marginTop: 30,
          }}>
          <Text style={styles.headingTitle}>Get Started</Text>
          <Label style={styles.labelFont}>Username</Label>
          <TextInput
            style={{
              width: '100%',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
            onChangeText={(userName) => setUserName(userName)}
            value={userName}
          />
          <Label style={styles.labelFont}>Email</Label>
          <TextInput
            style={{
              width: '100%',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            value={userEmail}
          />
          <Label style={styles.labelFont}>Alamat</Label>
          <Textarea rowSpan={5} bordered placeholder="Tulis alamat anda..." />
          <Label style={styles.labelFont}>Kota</Label>
          <Picker
            selectedValue={userCity}
            style={{
              marginTop: 20,
              borderColor: 'grey',
              fontFamily: 'Nunito-Regular',
            }}
            onValueChange={(itemValue, itemIndex) => setUserCity(itemValue)}>
            <Picker.Item label="Surabaya" value="sby" />
            <Picker.Item label="Malang" value="mlg" />
          </Picker>
          <Label style={styles.labelFont}>Tanggal Lahir</Label>
          <DatePicker date={date} onDateChange={setDate} />
        </Form>
        <View style={{paddingHorizontal: 15}}>
          <Label style={styles.labelFont}>Jenis Kelamin</Label>
          <RadioButton.Group
            onValueChange={(checked) => setChecked(checked)}
            value={checked}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="Laki-Laki" />
              <Text>Laki-Laki</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="Perempuan" />
              <Text>Perempuan</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={{width: '100%', padding: 15}}>
          <Button
            onPress={confirmSubmit}
            block
            style={{marginTop: 30, borderRadius: 5}}>
            <Text style={styles.buttonColor}>Submit</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  headingTitle: {
    fontFamily: 'Nunito-Black',
    marginBottom: 5,
    letterSpacing: 0.7,
    fontSize: 28,
    color: '#18191A',
  },

  labelFont: {
    color: 'grey',
    marginTop: 30,
  },
  fontRegular: {
    fontFamily: 'Nunito-Regular',
    marginBottom: 5,
    letterSpacing: 0.7,
    color: '#18191A',
  },

  textInput: {
    fontFamily: 'Nunito-Bold',
    letterSpacing: 0.7,
  },

  buttonColor: {
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
});

export default FormData;
