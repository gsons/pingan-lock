// import gulpError from './utils/gulpError';

import BluetoothDoor from "./lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();
import updateManager from './common/updateManager';


App({
  onLaunch() {
   
  },
  onShow() {
    var page=getCurrentPages().pop();
    if(!page||page.route=='pages/lock/lock'){
      bluetoothDoor.searchOpenDoor(false);
    }
    updateManager();
  },
});