import React from "react";
import { View, Text, Alert, Button, Switch } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Batata</Text>
      <Text>Eu amo batata</Text>

      <Button
        title="Clique aqui"
        onPress={() => Alert.alert("Alerta Batata", "Isso é um alerta batata!")}
      />

      <Switch value={true} />
    </View>
  );
}
