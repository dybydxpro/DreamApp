import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import Home from './components/Home';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
