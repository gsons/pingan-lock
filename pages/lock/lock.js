// pages/lock/lock.js
import BluetoothDoor from "../../lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();

var lock_json_arr = [{
        title: '大门门禁1号',
        bluetoothName: 'BY58F3CB61C',
        productKey: '7FBE27A26E9EE52F',
        bluetoothSN: '8472858A',
        auto: true,
    },
    {
        title: '大门门禁2号',
        bluetoothName: 'BYB764D6F0F',
        productKey: '3B62A31470525ADF',
        bluetoothSN: 'DBA49E76',
        auto: false,
    }
];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: ['light', 'dark', 'outline', 'light-outline'],
        lock_json_arr: lock_json_arr,
    },
    doAdd() {

    },
    openDoor(detail) {
        const {
            index,
            item
        } = detail.currentTarget.dataset;
        bluetoothDoor.init(item.bluetoothName, item.productKey, item.bluetoothSN);
        bluetoothDoor.openDoor();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getTabBar().init();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})