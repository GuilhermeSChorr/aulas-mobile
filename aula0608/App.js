import { View, Text, Alert } from "react-native";
import { Button, Switch } from "react-native-web";

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
      <Button title="Clique aqui" onPress={() => alert("Clicou!")} />
        <Switch value={true} />
        <Alert title="Alerta Batata" message="Isso é um alerta batata!" />
    </View> 
  );
}
