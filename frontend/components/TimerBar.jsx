import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text, Animated } from 'react-native';


const Progress = ({ step, steps, height }) => {

    const [width, setWidth] = useState(0)
    const animatedValue = React.useRef(new Animated.Value(1000)).current;
    const reactive = React.useRef(new Animated.Value(1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start()
    })

    React.useEffect(() => {
        reactive.setValue(-width + width * step / steps)
    }, [step, width])

    return (
        <>
            <Text style={{ fontSize: 12, fontWeight: '900' }}>
                {step} / {steps}
            </Text>
            <View
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width;
                    setWidth(newWidth)
                }}
                style={{
                    height,
                    backgroundColor: 'rgba(254, 146, 90,0.4)',
                    borderRadius: height,
                    overflow: 'hidden'
                }}>
                <Text style={{ textAlign: 'center', color: 'white', zIndex: 2, marginTop: 2 }}>{step} sec</Text>
                <Animated.View style={{
                    height,
                    width: '100%',
                    backgroundColor: '#F92C8C',
                    borderRadius: height,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: [
                        {
                            translateX: animatedValue,
                        },
                    ],
                }}
                />
            </View>
        </>
    )
}


export default function TimerBar(props) {

    const [index, setIndex] = useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % (60 + 1));
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [index])

    return (
        <View style={styles.container}>
            {/*<Button title="Press this to go to result page"*/}
            {/*        onPress={() => {*/}
            {/*            console.log('going to result page')*/}
            {/*            props.navigation.navigate('ResultScreen')*/}
            {/*        }}/>*/}

            <Progress step={index} steps={60} height={25} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    }
})
