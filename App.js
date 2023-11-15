import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Build Preview</Text>
      <Text>Update Preview</Text>
      <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/70bf/cd18/373aa86b4f8c1be89135b73cd8fadf6b?Expires=1701043200&Signature=qxwvkjQhrofj~HX08emaditRm59Wq67IGWVGWP488U1vt~MXxobaQ70PReNuE3BSckNLS7rMylej4JEbTzhFVS~rZEXUNRyH8rVeGWf4q1eU4RgPZHoNUJPS-8n0VHbThMLspX2hjhL0vnSUgfG9VF4-HVUO-FrwdPirSoNqUc8J~cfliq2sk9qhDUBzFcoqHy9GUM0K67pEevaEquLVthaSrY3nlvawG5sleE9GqMg96tfUecPsV9kdCvz6hkrphLycOHyXUcIy2~nUoskfIneOO3Zm2ZS2YW6Axxyeed7H5CgrX7dI1Yl0WSFqP8FwHweIKT9NV9r~fYAKaFoQyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
