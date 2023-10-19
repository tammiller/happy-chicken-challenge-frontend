// @types/react-native-circular-progress.d.ts

declare module 'react-native-circular-progress' {
    import * as React from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    export interface CircularProgressProps {
      size: number;
      width: number;
      fill: number;
      tintColor: string;
      backgroundColor?: string;
      
    }
  
    export default class CircularProgress extends React.Component<CircularProgressProps> {}
  }
  