import React from 'react';

import Signup from "./Signup";
import Login from "./Login";

const index = Stack => {
  return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default index;
