import React from 'react';
import { Button, Text, View } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();


const onStartRecord = async () => {
    const result = await this.audioRecorderPlayer.startRecorder();
    this.audioRecorderPlayer.addRecordBackListener((e) => {
        this.setState({
            recordSecs: e.currentPosition,
            recordTime: this.audioRecorderPlayer.mmssss(
                Math.floor(e.currentPosition),
            ),
        });
        return;
    });
    console.log(result);
};

const onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
        recordSecs: 0,
    });
    console.log(result);
};

const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
        this.setState({
            currentPositionSec: e.currentPosition,
            currentDurationSec: e.duration,
            playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
            duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
        return;
    });
};

const onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
};

const onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
};

const player = () => {
    <View>
        <Button
            onPress={onStartRecord}
            title="start"
        />
        <Button
            onPress={onStopRecord}
            title="start"
        />
        <Button
            onPress={onStartPlay}
            title="start"
        />
        <Button
            onPress={onStopPlay}
            title="stop"
        />
    </View>
}
export default player;

data={[
    { UHID: 392389281, key: 'Devin' },
    { UHID: 392389281, key: 'Dan' },
    { UHID: 392389281, key: 'Dominic' },
    { UHID: 392389281, key: 'Jackson' },
    { UHID: 392389281, key: 'James' },
    { UHID: 392389281, key: 'Joel' },
    { UHID: 392389281, key: 'John' },
    { UHID: 392389281, key: 'Jillian' },
    { UHID: 392389281, key: 'Jimmy' },
    { UHID: 392389281, key: 'Julie' },
]}