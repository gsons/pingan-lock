
export default class Door {
  cache_key = 'door_list';
  door_list = 
  [{"bluetoothName":"BY58F3CB61C","productKey":"7FBE27A26E9EE52F","bluetoothSN":"8472858A","bluetoothTitle":"默认大门","auto":false}];

  constructor() {
    const list = wx.getStorageSync(this.cache_key);
    if(list) this.door_list = list;
    else {
        wx.setStorageSync(this.cache_key,this.door_list);
    }
  }

  getDoorList() {
    const list = wx.getStorageSync(this.cache_key);
    this.door_list = list ? list : [];
    return this.door_list;
  }

  find(productKey) {
    this.door_list = this.getDoorList();
    const door = this.door_list.find(v => v && v.productKey == productKey);
    return door;
  }
  delete(productKey) {
    this.door_list = this.getDoorList();
    const door = this.door_list.find(v => v && v.productKey == productKey);
    if (door) {
      this.door_list = this.door_list.filter(v => !(v && v.productKey == productKey));
    }
    wx.setStorageSync(this.cache_key, this.door_list)
  }

  addOrUpdate(obj) {
    this.door_list = this.getDoorList();
    const index = this.door_list.findIndex(v => v && v.productKey === obj.productKey);
    if (index != -1) {
      this.door_list[index] = obj;
    } else {
      this.door_list.push(obj);
    }
    wx.setStorageSync(this.cache_key, this.door_list)
  }
}