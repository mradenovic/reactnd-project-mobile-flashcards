import * as React from 'react';
import { useRoute } from '@react-navigation/native';

export default function withRoute(WrappedComponent) {
  return function(props) {
    const route = useRoute();

    return (
      <WrappedComponent route={route} {...props} />
    );
  };
}
