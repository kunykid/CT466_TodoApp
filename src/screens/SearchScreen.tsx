import {View, Text} from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import InputComponent from '../components/InputComponent';

const SearchScreen = ({navigation}: any) => {
  const [result, setResult] = useState('');
  return (
    <Container back>
      <View>
        <TitleComponent text="SearchScreen" />
        <InputComponent value={result} onChange={(val) => setResult(val)}/>
      </View>
    </Container>
  );
};

export default SearchScreen;
