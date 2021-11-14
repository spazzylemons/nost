import React from 'react';

import Home from "./Home";

const index = Stack => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}

export default index;
