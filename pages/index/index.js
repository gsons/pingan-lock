const imageCdn = 'https://xcx.pinganbaiyun.cn/p_093_hd/gdfw/images/';
const swiperList = [
  `${imageCdn}/ad_003_eletric_001.png`,
  `${imageCdn}/ad_003_eletric_001.png`
];
import BluetoothDoor from "../../lib/BluetoothDoor";
const bluetoothDoor = new BluetoothDoor();

// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      current: 1,
      autoplay: true,
      duration: 500,
      interval: 5000,
      swiperList,

      visible: true,
      marquee2: {
        speed: 60,
        loop: -1,
        delay: 0,
      },
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
       //bluetoothDoor.searchOpenDoor(false);
    },

    async seartchOpenDoor(){
       bluetoothDoor.searchOpenDoor(true);
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
      return {  
        title: '门禁首页', 
        path: '/pages/index/index'
      };  
    }
})