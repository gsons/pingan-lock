// pages/person/person.js
import Door from "../../lib/Door";
const door = new Door();


Page({

      /**
       * 页面的初始数据
       */
      data: {
        text: "Copyright © 2021-2031 TD.All Rights Reserved."
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad(options) {

      },

      refreshLock() {
        wx.showLoading({
          title: '同步门禁数据',
        })
        door.refreshLock(true).then(() => {
          wx.hideLoading();
          wx.showToast({
            title: "强制同步成功",
          })
          setTimeout(()=>{
             wx.reLaunch({
               url: '/pages/lock/lock',
             })
          },1500)
        }).catch((err) => {
          wx.hideLoading();
          wx.showToast({
            title: err.message || err.errMsg || err.err_msg || (typeof err == 'string' ? err : '未知错误。。'),
            icon: "none"
          })
        })
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