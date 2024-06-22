// pages/door/door.js
import Door from "../../lib/Door";
const door = new Door();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'新增门禁',
    bluetoothName: '',
    productKey: '',
    bluetoothSN: '',
    bluetoothTitle: '',
    auto: true
  },
  autoLockChange(e) {
    const auto = e.detail.value;
    this.setData({
      auto
    });
  },
  async submit() {
    const opt = {
      bluetoothName: this.data.bluetoothName.trim(),
      productKey: this.data.productKey.trim(),
      bluetoothSN: this.data.bluetoothSN.trim(),
      bluetoothTitle: this.data.bluetoothTitle.trim(),
      auto: this.data.auto
    }
    if (!opt.bluetoothName) {
      await wx.showToast({
        title: '设备名称不能为空',
        icon: 'none'
      })
    } else if (!opt.productKey) {
      await wx.showToast({
        title: '设备秘钥不能为空',
        icon: 'none'
      })

    }
    
    // else if (!opt.bluetoothSN) {
    //   await wx.showToast({
    //     title: '设备系列号不能为空',
    //     icon: 'none'
    //   })
    // }
    
    else if (!opt.bluetoothTitle) {
      await wx.showToast({
        title: '设备备注不能为空',
        icon: 'none'
      })

    } else {
      door.addOrUpdate(opt);
      wx.navigateBack();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let title='新增门禁';
    if (options && options.key) {
      const door_lock = door.find(options.key);
      if(door_lock){
        this.setData({
          bluetoothName: door_lock.bluetoothName,
          productKey: door_lock.productKey,
          bluetoothSN: door_lock.bluetoothSN,
          bluetoothTitle: door_lock.bluetoothTitle,
          auto: door_lock.auto
        });
        title='修改门禁'
      }
      else{
         wx.navigateBack()
      }
    }
    this.setData({title});
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