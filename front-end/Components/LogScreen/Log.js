import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
import { Audio } from "expo-av";
import axiosInstance from "../../axios";

const Log = () => {
  const [textSend, setTextSend] = useState("");
  const [recordedURI, setRecordedURI] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  {
    /*const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 5000,
    headers: {
      Authorization: "JWT " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
*/
  }

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
      setRecordedURI(recording);
      setIsRecording(true);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    // Error here
    console.log("Stopping recording..");
    await recordedURI.stopAndUnloadAsync();
    console.log(recordedURI);
    const uri = recordedURI.getURI();
    console.log("Recording stopped and stored at", uri);
    setIsRecording(false);
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <TextInput
          placeholder="i.e This place was a blast!"
          onChangeText={setTextSend}
        />

        <Button onPress={handleSubmitText} title="Submit" color="#841584" />
      </View>
      <View style={styles.view}>
        <Icon name="mic" type="ionicon" color="gray" />
        <TouchableOpacity
          style={styles.button}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  view: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 25,
    backgroundColor: "salmon",
  },
});
