import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Pressable, BackHandler } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import StopWatch from './StopWatch';
//import { RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC } from 'expo-av/build/Audio';
import { BASE_URL } from '../constants/utils';
// import Header from './Header';
// import { ScrollView } from 'react-native-gesture-handler';
//import * as FileSystem from 'expo-file-system';






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
            file: recording.getURI(),

        });

        setRecordings(updatedRecordings);
    }
    // async function handleSubmit(params) {

    //     const file = {
    //         image: params.file,
    //         title: "wjw",
    //         price: "21",
    //         description: "ugaba",
    //         published: true

    //         // e.g. 'image/jpg'
    //     }

    //     const body = new FormData()
    //     body.append('file', file)

    //     fetch(BASE_URL + `/api/products/addProduct`, {
    //         method: 'POST',
    //         body
    //     })

    // }




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
                    ]}
                        onPress={() => postDocument(recordingLine.file)}
                    //onPress={() => console.log(recordingLine.file)}
                    >
                        <Text style={styles.text}>Save</Text>
                    </Pressable>
                </View>
            );
        });
    }


    // async function uploadBackgroundVideo(localUrl) {
    //     const response = await FileSystem.uploadAsync(`http://localhost:4000/api/multipart-upload`, localUrl, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         },
    //         sessionType: FileSystem.FileSystemSessionType.BACKGROUND,
    //         httpMethod: 'POST',
    //         fieldName: 'audio',
    //         mimeType: 'audio/quicktime',
    //         uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    //     })
    //     console.log(JSON.stringify(response.body), 'Response from uploading to local server')
    // }

    //   async function getLibraryVideo() {
    //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     if (status !== 'granted') {
    //       return alert('Sorry, we need camera roll permissions to make this work!');
    //     }
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    //       videoQuality: ImagePicker.UIImagePickerControllerQualityType.High,
    //       quality: .1
    //     })

    //     if (!result.cancelled) {
    //       uploadBackgroundVideo(result.uri)
    //     }
    //   }


    const postDocument = (uri) => {
        var blobObject = blobCreationFromURL(uri);

        // Create Blob file from URL
        function blobCreationFromURL(inputURI) {

            var binaryVal;

            // mime extension extraction
            var inputMIME = inputURI.split(',')[0].split(':')[1].split(';')[0];

            // Extract remaining part of URL and convert it to binary value
            if (inputURI.split(',')[0].indexOf('base64') >= 0)
                binaryVal = atob(inputURI.split(',')[1]);

            // Decoding of base64 encoded string
            else
                binaryVal = unescape(inputURI.split(',')[1]);

            // Computation of new string in which hexadecimal
            // escape sequences are replaced by the character 
            // it represents

            // Store the bytes of the string to a typed array
            var blobArray = [];
            for (var index = 0; index < binaryVal.length; index++) {
                blobArray.push(binaryVal.charCodeAt(index));
            }

            return new Blob([blobArray], {
                type: inputMIME
            });
        }












        async function uploadAudioAsync(uri) {
            console.log("Uploading " + uri);
            let apiUrl = 'http://localhost:4000/audios/upload';
            //let uriParts = uri.split('.').pop();
            //let fileType = uriParts[uriParts.length - 1];

            let formData = new FormData();
            formData.append('Blob file', blobObject);

            let options = {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            };

            console.log("POSTing " + uri + " to " + apiUrl);
            return fetch(apiUrl, options);
        }

        // Do a recording
        // uri = await this.recording.getURI();
        uploadAudioAsync(uri)
    }
    // const handleSubmit = (uri) => {
    //     //const uri = recording.getURI();
    //     //const filetype = uri.split(".").pop();
    //     //const filename = uri.split("/").pop();
    //     const fd = new FormData();
    //     fd.append("avatar", {
    //         uri,
    //         //type: `audio/${filetype}`,
    //         name: "avatar",
    //     });


    //     const options = {
    //         method: 'POST',
    //         body: fd,
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     };
    //     try {
    //         fetch(`${BASE_URL}/audios/upload`, options)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }



    return (

        <ScrollView>

            <View style={styles.container}>
                <StopWatch startStop={recording ? stopRecording : startRecording} startTimer={startRecording} stopTimer={stopRecording} />
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