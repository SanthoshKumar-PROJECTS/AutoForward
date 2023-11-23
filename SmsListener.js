import { DeviceEventEmitter } from 'react-native';

const SmsListener = {
  startListener(callback) {
    DeviceEventEmitter.addListener('onReceiveSMS', callback);
  },

  stopListener() {
    DeviceEventEmitter.removeAllListeners('onReceiveSMS');
  },
};

export default SmsListener;