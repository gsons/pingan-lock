// import gulpError from './utils/gulpError';

import BluetoothDoor from "./lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();
import updateManager from './common/updateManager';


App({
  last_share_time: 0, 
  onLaunch() {

  },
  onShow() {
    var page=getCurrentPages().pop();
    if(!page||page.route=='pages/lock/lock'){
      const tt=+new Date()-this.last_share_time;
      console.log(tt,tt);
      if(tt>30e3) bluetoothDoor.searchOpenDoor(false);
    }
    updateManager();
  },
});