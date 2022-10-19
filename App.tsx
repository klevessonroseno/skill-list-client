import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#A370F7'} barStyle={'light-content'}></StatusBar>
      <Home/>
    </>
  )
}