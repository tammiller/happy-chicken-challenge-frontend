import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Icon = ({ source, width, height, style = {} }) => {
  return (
    <View style={[style, { width, height }]}>
      <Image source={source} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default Icon;