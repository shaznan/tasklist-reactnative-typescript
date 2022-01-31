import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import InputFeild from "./src/components/InputFeild";

export default function app() {
  const [todo, setTodo] = useState<string>("");
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}>Taskify App</Text>
      </View>
      <View>
        <InputFeild todo={todo} setTodo={setTodo} />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87ceeb",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
});

// let name: string;
// let age: number;
// let animals: string[];
// let animalWeights: number[];

// type Person = {
//   name: string;
//   age?: number | string;
// };

// let personDetails: Person = {
//   name: "shaznan",
//   age: " 15",
// };

// const listOfPersonDetails: Person[] = [
//   {
//     name: "shaznan fairoze",
//     age: 24,
//   },
// ];

// const printSentence: (name: string, age: number) => string = (name, age) => {
//   return `${name} is ${age} years old`;
// };
