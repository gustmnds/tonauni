import { Animated } from "react-native";

export function fadeIn(value: Animated.Value) {
  Animated.timing(value, {
    toValue: 0.4,
    duration: 100,
    useNativeDriver: true
  }).start();
}

export function fadeOut(value: Animated.Value) {
  Animated.timing(value, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true
  }).start();
}
