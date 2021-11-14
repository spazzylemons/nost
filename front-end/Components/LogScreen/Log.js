import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button,StyleSheet } from "react-native";
import axios from "axios";
import { Audio } from "expo-av";
import axiosInstance from "../../axios";


const Log = () => {
  const [textSend, setTextSend] = useState("");

  {/*const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 5000,
    headers: {
      Authorization: "JWT " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
*/}

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  async function handleSubmitText() {
    try {
      let response = await axiosInstance.post("posts/create/", {
        texts: textSend,
      });
    } catch (error) {
      throw error;
    }
  }

  async function handleSubmitAudio() {
    try {
      let response = await axiosInstance.post("posts/create/", {
        texts: textSend,
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <ScrollView>
      <TextInput
        style={{ height: 40 }}
        placeholder="Username"
        onChangeText={setTextSend}
        defaultValue={textSend}
      />

      <Button
        onPress={onSubmit}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={styles.container}>
        <Button
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />
      </View>
    </ScrollView>
  );
}

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
