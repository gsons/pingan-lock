// import gulpError from './utils/gulpError';

import BluetoothDoor from "./lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();
import updateManager from './common/updateManager';


App({
  last_share_time: 0, 
  last_auto_time: 0, 
  onLaunch() {

  },
  onShow() {
    var page=getCurrentPages().pop();
    if(!page||page.route=='pages/lock/lock'){
      const tt0=+new Date()-this.last_share_time;
      const tt1=+new Date()-this.last_auto_time;
      console.log(tt0,tt1);
      if(tt0>30e3&&tt1>60e3){
        this.last_auto_time= +new Date();
        bluetoothDoor.searchOpenDoor(true);
      }
    }
    updateManager();
  },
});