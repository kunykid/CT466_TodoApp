import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {fontFamilies} from '../../constants/fontFamilies';
import InputComponent from '../../components/InputComponent';
import {Key, Sms} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import ButtonComponent from '../../components/ButtonComponent';
import SpaceComponent from '../../components/SpaceComponent';
import {globalStyles} from '../../styles/globalStyles';
import auth from '@react-native-firebase/auth';
const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (email || password) {
      setErrorText('');
    }
  }, [email, password]);

  async function checkEmailExists(email:any) {
    try {
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      if (signInMethods && signInMethods.length > 0) {
        console.log('Email đã được đăng ký.');
      } else {
        console.log('Email chưa được đăng ký.');
      }
    } catch (error) {
      console.log('Lỗi khi kiểm tra email.', error);
    }
  }

  const handleLoginWithEmail = async () => {
    if (!email || !password) {
      setErrorText('Please enter a valid email and password');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      console.log('Đăng nhập thành công!', userCredential.user);
      console.log(signInMethods);
    }catch (error) {
      console.log('Đăng nhập thất bại.', error);
      setErrorText('Login failed. Please try again.');
    }finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <TitleComponent
          text="Login"
          size={32}
          font={fontFamilies.bold}
          styles={{textTransform: 'uppercase', flex: 0, textAlign: 'center'}}
        />

        <InputComponent
          title="Email"
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Email"
          prefix={<Sms size={22} color={colors.desc} />}
          allowClear
          type="email-address"
        />
        <InputComponent
          title="Password"
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          prefix={<Key size={20} color={colors.desc} />}
          isPassWord
        />
        {errorText && <TextComponent text={errorText} color="red" flex={0} />}
        <ButtonComponent
          isLoading={isLoading}
          text="login"
          onPress={handleLoginWithEmail}
        />
        <SpaceComponent height={20} />
        <Text style={[globalStyles.text, {textAlign: 'center'}]}>
          You don't have an account?{' '}
          <Text
            style={{color: 'coral'}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Create an account
          </Text>
        </Text>
      </SectionComponent>
    </Container>
  );
};

export default LoginScreen;
