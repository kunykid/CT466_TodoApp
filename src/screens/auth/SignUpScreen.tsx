import {View, Text, Button} from 'react-native';
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


const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (email || password) {
      setErrorText('');
    }
  }, [email, password]);
  const handleSignUpWithEmail = async () => {
    if (!email || !password) {
      setErrorText('Please enter a valid email and password');
    } else {
      setErrorText('');
      setIsLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
        })
        .catch((error): any => {
          setIsLoading(false);
          setErrorText(error.message);
        });
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
          text="Sign Up"
          size={32}
          font={fontFamilies.bold}
          styles={{textTransform: 'uppercase', flex: 0, textAlign: 'center'}}
        />
        <View style={{marginVertical: 20}}>
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
        </View>
        <ButtonComponent
          isLoading={isLoading}
          text="sign up"
          onPress={handleSignUpWithEmail}
        />
        <SpaceComponent height={20} />
        <Text style={[globalStyles.text, {textAlign: 'center'}]}>
          You have an already account{' '}
          <Text
            style={{color: 'coral'}}
            onPress={() => navigation.navigate('LoginScreen')}>
            Login
          </Text>
        </Text>
      </SectionComponent>
    </Container>
  );
};

export default SignUpScreen;
