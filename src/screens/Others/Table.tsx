import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TitleComponent from '../../components/TitleComponent'

const Table = ({navigation}:any) => {
  return (
    <Container>
        <TouchableOpacity onPress={() => navigation.navigate('WorkSpace')}>
            <TitleComponent text='Table'/>
        </TouchableOpacity>
    </Container>
  )
}

export default Table