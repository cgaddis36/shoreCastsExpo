import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function Button0({title, presser}) {
  return (
    <View style={styles.button}>
      <Button
      alignSelf='center'
      title={title}
      color='white'
      onPress={() => presser()
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50
   },
});

export default Button0;
