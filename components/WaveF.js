


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import SoundCloudWaveform from 'react-native-soundcloud-waveform'
import { useState } from 'react';

const WaveF = () => {

    const [Time, setTime] = useState("0");



    <View>
        <SoundCloudWaveform
            waveformUrl={"../assets/wave.mp3"}
            percentPlayable={1}
            percentPlayed={1}
            setTime={setTime('1000')}
        />
    </View>

}



export default WaveF;
