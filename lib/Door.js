
export default class Door {
  cache_key = 'door_list';
  door_list = 
  [{"bluetoothName":"BY58F3CB61C","productKey":"7FBE27A26E9EE52F","bluetoothSN":"8472858A","bluetoothTitle":"默认大门","auto":false}];

  constructor() {
    const list = wx.getStorageSync(this.cache_key);
    if(Array.isArray(list)&&list.length>0) this.door_list = list;
    else {
        wx.setStorageSync(this.cache_key,this.door_list);
    }
  }

  async refreshLock(forece=false){
    let lock_list= await this.fetchLockData();
    console.log('lock_list',lock_list);
    if(Array.isArray(lock_list)&&lock_list.length>0){
      lock_list=lock_list.map(v=>{
        return {"bluetoothName":v.bluetoothName,"productKey":v.productKey,"bluetoothSN":v.sn,"bluetoothTitle":v.name,"auto":true};
      });
      if(!forece){
        const arr= this.getDoorList();
        lock_list=lock_list.filter(vo=>{
           const is_exit=arr.find(v=>v.productKey==vo.productKey);
           return is_exit?false:true;
        });
      }
      console.log('待更新门禁列表',lock_list);
      lock_list.forEach(item=>{
          this.addOrUpdate(item);
      })
    }else{
      throw new Error('扫描到门禁数据为空')
    }
  }

  fetchLockData () {
    const apiUrl="https://pingan.json.cpolar.cn"

    return new Promise((resolve, reject) => {
        wx.request({
            url: apiUrl,
            timeout:2e3,
            success: (res) => {
                if(res.statusCode==200){
                  resolve(res.data.data);
                }else{
                  const err_msg="网络错误，请连接扫描设备后，再同步门禁";
                  console.warn(err_msg,res.statusCode);
                  reject(err_msg);
                }
            },
            fail: (res) => {
                const err_msg="网络错误，请连接扫描设备后再试";
                console.warn(err_msg,res);
                reject(err_msg);
            }
        })
    });
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