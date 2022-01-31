import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<props> = ({ todo, setTodo }) => {
  const onPressHandler = () => {
    console.log(todo);
  };
  return (
    <View style={Styles.input__container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter Some Text"
        onChangeText={setTodo}
        value={todo}
      />
      <Button title="Go" onPress={onPressHandler} color="black" />
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,1)",
    width: wp("80%"),
    height: hp("5%"),
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
  },
  input__container: {
    alignSelf: "center",
  },
});

export default InputFeild;
