// import gulpError from './utils/gulpError';

import BluetoothDoor from "./lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();
import updateManager from './common/updateManager';


App({
  onLaunch() {
    bluetoothDoor.searchOpenDoor(false);
  },
  onShow() {
    updateManager();
  },
});