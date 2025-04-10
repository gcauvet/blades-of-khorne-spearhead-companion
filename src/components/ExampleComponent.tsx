import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface ExampleComponentProps {
  title: string;
}

const ExampleComponent: FC<ExampleComponentProps> = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default ExampleComponent;
