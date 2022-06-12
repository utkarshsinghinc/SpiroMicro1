import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import StopWatch from './StopWatch';
// import Header from './Header';
// import { ScrollView } from 'react-native-gesture-handler';







const AudioRecoder = () => {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");

    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();

            if (permission.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });

                const { recording } = await Audio.Recording.createAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );

                setRecording(recording);
            } else {
                setMessage("Please grant permission to app to access microphone");
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: "../assests/",

        });

        setRecordings(updatedRecordings);
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
            return (
                <View key={index} style={styles.row}>
                    <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>

                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#5a6373'
                                : 'black'
                        },
                        styles.Btn
                    ]} onPress={() => recordingLine.sound.replayAsync()} >
                        <Text style={styles.text}>Play</Text>
                    </Pressable>


                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#5a6373'
                                : 'black'
                        },
                        styles.Btn
                    ]} onPress={() => Sharing.shareAsync(recordingLine.file)}  >
                        <Text style={styles.text}>Share</Text>
                    </Pressable>
                </View>
            );
        });
    }

    return (

        <ScrollView>

            <View style={styles.container}>
                <StopWatch startStop={recording ? stopRecording : startRecording} />
                <Text>{message}</Text>
                {/* <Pressable style={styles.Btn} onPress={recording ? stopRecording : startRecording}  >
                    <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
                </Pressable> */}
                {getRecordingLines()}


                <StatusBar style="auto" />
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 700
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fill: {
        flex: 1,
        margin: 16
    },
    button: {
        margin: 16
    },
    Btn: {
        widht: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        // backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default AudioRecoder;