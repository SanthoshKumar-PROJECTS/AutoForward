import { NativeModules, DeviceEventEmitter } from 'react-native';
import Communications from 'react-native-communications';

const SMSListener = NativeModules.SMSListener;

export const startSMSListener = (forwardingNumber) => {
  DeviceEventEmitter.addListener('onSMSReceived', (event) => {
    const { originatingAddress, body } = event;
    forwardSMS(body, originatingAddress, forwardingNumber);
  });

  SMSListener.startListener();
};

export const stopSMSListener = () => {
  DeviceEventEmitter.removeAllListeners('onSMSReceived');
  SMSListener.stopListener();
};

export const forwardSMS = (message, senderNumber, forwardingNumber) => {
  Communications.text(forwardingNumber, `${senderNumber}: ${message}`);
};