import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import SectionComponent from '../../components/SectionComponent';
import RowComponent from '../../components/RowComponent';

const Account = ({navigation}: any) => {
  return (
    <Container title="Tài khoản" back>
      <SectionComponent>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Icon</Text>
          <Text>Gmail</Text>
        </View>
      </SectionComponent>
    </Container>
  );
};

export default Account;
