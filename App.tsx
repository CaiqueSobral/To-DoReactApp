import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomePage />
    </SafeAreaProvider>
  );
}
