import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <WebView
        source={{ uri: 'https://taichinh.vjnetwork.net/' }}
        style={styles.webview}
        injectedJavaScript={`
          const menu = document.querySelector('.menu-container');
          if (menu) menu.style.paddingTop = 'env(safe-area-inset-top)';
          true;
        `}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;