// import gulpError from './utils/gulpError';

import BluetoothDoor from "./lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();


App({
    onShow() {
        bluetoothDoor.searchOpenDoor(false);
        // if (gulpError !== 'gulpErrorPlaceHolder') {
        //     wx.redirectTo({
        //         url: `/pages/gulp-error/index?gulpError=${gulpError}`,
        //     });
        // }
    },
});
