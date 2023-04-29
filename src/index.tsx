import { registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';
import { LoginPage } from '@/pages/login';
import { AuthProvider } from './context/authcontext';
import { useState } from 'react';
import { QRCodePage } from './pages/qrcode';

export default function App() {
  const [token, setToken] = useState("");
  return (
    <AuthProvider value={{token, setToken}}>
      <View style={styles.container}>
        {token ?
          <QRCodePage/> :
          <LoginPage/>
        }
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121214',
  },
});

registerRootComponent(App);
