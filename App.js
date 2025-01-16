import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(display);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    ["C", "(", ")", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display || "0"}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  button === "=" && styles.equalsButton,
                  button === "=" && { flex: 2 },
                  button === "0" && { flex: 2 }, 
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between",
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#333",
  },
  display: {
    fontSize: 50,
    color: "#fff",
  },
  result: {
    fontSize: 30,
    color: "#888",
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: "#222",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#444",
    flex: 1,
    margin: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  equalsButton: {
    backgroundColor: "#f57c00",
  },
});
