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
    btn_loading_obj: {},
    share_door:null,
  },
  autoLockChange(e) {
    const {
      item
    } = e.currentTarget.dataset;
    item.auto = e.detail.value;
    door.addOrUpdate(item)
    const lock_json_arr = door.getDoorList();
    this.setData({
      lock_json_arr
    });
  },
  onDelete(detail) {
    const {
      item
    } = detail.currentTarget.dataset;
    door.delete(item.productKey);
    const lock_json_arr = door.getDoorList();
    this.setData({
      lock_json_arr
    });
  },
  onEdit(detail) {
    const {
      item
    } = detail.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/door/door?key=' + item.productKey
    })
  },
  doAdd() {
    wx.navigateTo({
      url: '/pages/door/door',
    })
  },

  openShare(detail) {
    const {
      item
    } = detail.currentTarget.dataset;
    this.setData({
      share_door:item
    });
  },

  openDoor(detail) {
    const {
      item
    } = detail.currentTarget.dataset;
    this.data.btn_loading_obj[[item.productKey]] = true;
    this.setData({
      btn_loading_obj: this.data.btn_loading_obj
    });
    bluetoothDoor.init(item.bluetoothName, item.productKey, item.bluetoothSN);
    bluetoothDoor.openDoor(() => {
      this.data.btn_loading_obj[[item.productKey]] = false;
      this.setData({
        btn_loading_obj: this.data.btn_loading_obj
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options && options.param) {
        const item= JSON.parse(decodeURIComponent(options.param));
        console.log("读取分享门禁信息，，",item);
        door.addOrUpdate(item);
        wx.reLaunch({
          url: '/pages/lock/lock',
        })
    }else{
      door.refreshLock().then(() => {
        const lock_json_arr = door.getDoorList();
        console.info("刷新门禁数据成功")
        this.setData({
          lock_json_arr
        });
      }).catch((err) => {
        console.warn("刷新门禁数据失败", err)
      });
    }
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
    const lock_json_arr = door.getDoorList();
    this.setData({
      lock_json_arr
    });
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
    if (this.data.share_door) {
      const param= encodeURIComponent(JSON.stringify(this.data.share_door));
      console.log("share param ",param);
      return {
        title: `来自分享的门禁“${this.data.share_door.bluetoothTitle}”`,
        path: '/pages/lock/lock?param='+param,
        imageUrl:"/assets/logo-180.png"
      };
    }else{
       wx.showToast({
         title: '请点分享按钮后分享',
       })
    }
  }

})