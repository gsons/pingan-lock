// pages/lock/lock.js
import BluetoothDoor from "../../lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();
import Door from "../../lib/Door";
const door = new Door();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: ['light', 'dark', 'outline', 'light-outline'],
        lock_json_arr: [],
    },
    autoLockChange(e){
      const {item} = e.currentTarget.dataset;
      item.auto= e.detail.value;
      door.addOrUpdate(item)
      const lock_json_arr=door.getDoorList();
      this.setData({lock_json_arr});
    },
    onDelete(detail) {
      const {item} = detail.currentTarget.dataset;
      door.delete(item.productKey);
      const lock_json_arr=door.getDoorList();
      this.setData({lock_json_arr});
    },
    onEdit(detail) {
      const {item} = detail.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/door/door?key='+item.productKey
      })
    },
    doAdd() {
      wx.navigateTo({
        url: '/pages/door/door',
      })
    },
    openDoor(detail) {
        const {item} = detail.currentTarget.dataset;
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
        const lock_json_arr=door.getDoorList();
        this.setData({lock_json_arr});
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
      return false;
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
      return {  
        title: '门禁列表', 
        path: '/pages/lock/lock'
      };  
    }
})