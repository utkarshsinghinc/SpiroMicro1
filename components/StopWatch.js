// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

// importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const StopWatch = ({ startStop, startTimer, stopTimer }) => {
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(15000);
    const [resetTimer, setResetTimer] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    //const start = { isTimerStart }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <View style={styles.sectionStyle}>
                    <Stopwatch
                        // laps
                        // msecs
                        start={isStopwatchStart}
                        // To start
                        reset={resetStopwatch}
                        // To reset
                        options={options}
                        // Options for the styling
                        getTime={(time) => {
                            console.log(time);
                        }}
                    />
                    <View style={styles.startreset}>

                        <TouchableHighlight
                            style={{ margin: 10, borderColor: 'black', borderWidth: 3, padding: 5 }}
                            onPress={() => {
                                setIsStopwatchStart(!isStopwatchStart);
                                if (!isStopwatchStart) {
                                    setResetStopwatch(false);
                                } else {
                                    setResetStopwatch(true);
                                }

                                startStop();


                            }}>
                            <Text style={styles.buttonText}>
                                {!isStopwatchStart ? 'START RECORDING' : 'STOP RECORDING'}
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ margin: 10, borderColor: 'black', borderWidth: 3, padding: 5 }}
                            onPress={() => {
                                setIsStopwatchStart(false);
                                setResetStopwatch(true);
                            }}>
                            <Text style={styles.buttonText}>RESET</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {/* <View style={styles.sectionStyle}>
                    <Timer
                        totalDuration={timerDuration}
                        msecs
                        // Time Duration
                        start={
                            isTimerStart
                        }
                        // To start
                        reset={resetTimer}
                        // To reset
                        options={options}
                        // Options for the styling
                        handleFinish={() => {
                            //startStop();
                            !isTimerStart



                        }}
                        // Can call a function On finish of the time
                        getTime={(time) => {
                            console.log(time);
                        }}
                    />
                    <TouchableHighlight
                        onPress={() => {
                            startStop();
                            setIsTimerStart(!isTimerStart);
                            setResetTimer(false);



                        }}>
                        <Text style={styles.buttonText}>
                            {!isTimerStart ? 'START' : 'STOP'}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            setIsTimerStart(false);
                            setResetTimer(true);

                        }}>
                        <Text style={styles.buttonText}>RESET</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    sectionStyle: {
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,
    },
    startreset: {
        flexDirection: "row"
    }
});

const options = {
    container: {
        backgroundColor: '#000000',
        padding: 5,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
    }

};

export default StopWatch;