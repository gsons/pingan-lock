
function inArray(arr, key, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
            return i;
        }
    }
    return -1;
}

function ab2hex(buffer) {
    var hexArr = Array.prototype.map.call(
        new Uint8Array(buffer),
        function (bit) {
            return ('00' + bit.toString(16)).slice(-2)
        }
    )
    return hexArr.join('');
}

function _(t) {
    for (var e = "", a = 0; a < t.length; a++) {
        var s, n = t[a];
        1 == (s = n < 0 ? (255 + n + 1).toString(16) : n.toString(16)).length && (s = "0" + s), e += s
    }
    return e
}

function w(t) {
    return Array.prototype.map
        .call(new Uint8Array(t), function (t) {
            return ("00" + t.toString(16)).slice(-2);
        })
        .join("");
}


function f(t, e, a) {
    var s = 7,
        n = 0;
    console.log(e);
    var o = parseInt(e.substr(3, 2), 16),
        r = parseInt(e.substr(5, 2), 16),
        i = parseInt(e.substr(7, 2), 16),
        c = parseInt(e.substr(9, 2), 16);
    console.log(
            "设备ID ".concat(o, " ").concat(r, " ").concat(i, " ").concat(c)
        ),
        console.log(new Uint8Array(t));
    for (var d = new Uint8Array(t), u = 0, h = 0; h < d.length; h++)
        u += d[h];
    console.log(u);
    for (var p = 0; p < a.length / 2; p++)
        u += parseInt(a.substr(2 * p, 2), 16);
    console.log(u);
    var g = (u >> 8) & 255;
    console.log(g);
    var f = 255 & u;
    console.log(f);
    var w = _([f, g, d[0], d[1], d[2], d[3], 0, 0]),
        m = l.des(l.hexToString(a), l.hexToString(w), 1),
        x = l.stringToHex(m);
    console.log("DES Test: " + x);
    s = [
        165,
        20,
        5,
        o,
        r,
        i,
        c,
        0,
        1,
        7,
        parseInt(x.substr(0, 2), 16),
        parseInt(x.substr(2, 2), 16),
        parseInt(x.substr(4, 2), 16),
        parseInt(x.substr(6, 2), 16),
        parseInt(x.substr(8, 2), 16),
        parseInt(x.substr(10, 2), 16),
        parseInt(x.substr(12, 2), 16),
        parseInt(x.substr(14, 2), 16),
        n,
        90,
    ];
    for (var b = 0; b < s.length; b++) n += s[b];
    return (
        (s[s.length - 2] = ~(255 & n) - 1 + 1),
        console.log("instruct222", _(s)),
        s
    );
}


function e(r) {
    for (var e = "", a = "0x" == r.substr(0, 2) ? 2 : 0; a < r.length; a += 2) e += String.fromCharCode(parseInt(r.substr(a, 2), 16));
    return e
}

var l = {
    formatTime: function (e) {
        var n = e.getFullYear(),
            t = e.getMonth() + 1,
            a = e.getDate(),
            o = e.getHours(),
            A = e.getMinutes(),
            h = e.getSeconds();
        return [n, t, a].map(r).join("/") + " " + [o, A, h].map(r).join(":")
    },
    des: function (r, n, t, a, o, A) {
        "" == r && (r = e("6B73733230313640"));
        var h, c, u, f, i, d, g, y, C, l, w, s, v = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756),
            p = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344),
            m = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584),
            b = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928),
            S = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080),
            x = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312),
            j = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154),
            T = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696),
            H = function (r) {
                for (var e, n, t, a = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964), o = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697), A = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272), h = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144), c = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256), u = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488), f = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746), i = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568), d = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578), g = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488), y = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800), C = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744), l = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128), w = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261), s = r.length > 8 ? 3 : 1, v = new Array(32 * s), p = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), m = 0, b = 0, S = 0; S < s; S++) {
                    var x = r.charCodeAt(m++) << 24 | r.charCodeAt(m++) << 16 | r.charCodeAt(m++) << 8 | r.charCodeAt(m++),
                        j = r.charCodeAt(m++) << 24 | r.charCodeAt(m++) << 16 | r.charCodeAt(m++) << 8 | r.charCodeAt(m++);
                    x ^= (t = 252645135 & (x >>> 4 ^ j)) << 4, x ^= t = 65535 & ((j ^= t) >>> -16 ^ x), x ^= (t = 858993459 & (x >>> 2 ^ (j ^= t << -16))) << 2, x ^= t = 65535 & ((j ^= t) >>> -16 ^ x), x ^= (t = 1431655765 & (x >>> 1 ^ (j ^= t << -16))) << 1, x ^= t = 16711935 & ((j ^= t) >>> 8 ^ x), t = (x ^= (t = 1431655765 & (x >>> 1 ^ (j ^= t << 8))) << 1) << 8 | (j ^= t) >>> 20 & 240, x = j << 24 | j << 8 & 16711680 | j >>> 8 & 65280 | j >>> 24 & 240, j = t;
                    for (var T = 0; T < p.length; T++) p[T] ? (x = x << 2 | x >>> 26, j = j << 2 | j >>> 26) : (x = x << 1 | x >>> 27, j = j << 1 | j >>> 27), j &= -15, e = a[(x &= -15) >>> 28] | o[x >>> 24 & 15] | A[x >>> 20 & 15] | h[x >>> 16 & 15] | c[x >>> 12 & 15] | u[x >>> 8 & 15] | f[x >>> 4 & 15], n = i[j >>> 28] | d[j >>> 24 & 15] | g[j >>> 20 & 15] | y[j >>> 16 & 15] | C[j >>> 12 & 15] | l[j >>> 8 & 15] | w[j >>> 4 & 15], t = 65535 & (n >>> 16 ^ e), v[b++] = e ^ t, v[b++] = n ^ t << 16
                }
                return v
            }(r),
            I = 0,
            M = n.length,
            k = 0,
            B = 32 == H.length ? 3 : 9;
        d = 3 == B ? t ? new Array(0, 32, 2) : new Array(30, -2, -2) : t ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2), 2 == A ? n += "        " : 1 == A ? (u = 8 - M % 8, n += String.fromCharCode(u, u, u, u, u, u, u, u), 8 == u && (M += 8)) : A || (n += "\0\0\0\0\0\0\0\0");
        var D = "",
            F = "";
        for (1 == a && (g = o.charCodeAt(I++) << 24 | o.charCodeAt(I++) << 16 | o.charCodeAt(I++) << 8 | o.charCodeAt(I++), C = o.charCodeAt(I++) << 24 | o.charCodeAt(I++) << 16 | o.charCodeAt(I++) << 8 | o.charCodeAt(I++), I = 0); I < M;) {
            var Y = n.charCodeAt(I++) << 24 | n.charCodeAt(I++) << 16 | n.charCodeAt(I++) << 8 | n.charCodeAt(I++),
                $ = n.charCodeAt(I++) << 24 | n.charCodeAt(I++) << 16 | n.charCodeAt(I++) << 8 | n.charCodeAt(I++);
            for (1 == a && (t ? (Y ^= g, $ ^= C) : (y = g, l = C, g = Y, C = $)), Y ^= (u = 252645135 & (Y >>> 4 ^ $)) << 4, Y ^= (u = 65535 & (Y >>> 16 ^ ($ ^= u))) << 16, Y ^= u = 858993459 & (($ ^= u) >>> 2 ^ Y), Y ^= u = 16711935 & (($ ^= u << 2) >>> 8 ^ Y), Y = (Y ^= (u = 1431655765 & (Y >>> 1 ^ ($ ^= u << 8))) << 1) << 1 | Y >>> 31, $ = ($ ^= u) << 1 | $ >>> 31, c = 0; c < B; c += 3) {
                for (w = d[c + 1], s = d[c + 2], h = d[c]; h != w; h += s) f = $ ^ H[h], i = ($ >>> 4 | $ << 28) ^ H[h + 1], u = Y, Y = $, $ = u ^ (p[f >>> 24 & 63] | b[f >>> 16 & 63] | x[f >>> 8 & 63] | T[63 & f] | v[i >>> 24 & 63] | m[i >>> 16 & 63] | S[i >>> 8 & 63] | j[63 & i]);
                u = Y, Y = $, $ = u
            }
            $ = $ >>> 1 | $ << 31, $ ^= u = 1431655765 & ((Y = Y >>> 1 | Y << 31) >>> 1 ^ $), $ ^= (u = 16711935 & ($ >>> 8 ^ (Y ^= u << 1))) << 8, $ ^= (u = 858993459 & ($ >>> 2 ^ (Y ^= u))) << 2, $ ^= u = 65535 & ((Y ^= u) >>> 16 ^ $), $ ^= u = 252645135 & ((Y ^= u << 16) >>> 4 ^ $), Y ^= u << 4, 1 == a && (t ? (g = Y, C = $) : (Y ^= y, $ ^= l)), F += String.fromCharCode(Y >>> 24, Y >>> 16 & 255, Y >>> 8 & 255, 255 & Y, $ >>> 24, $ >>> 16 & 255, $ >>> 8 & 255, 255 & $), 512 == (k += 8) && (D += F, F = "", k = 0)
        }
        return D + F
    },
    hexToString: e,
    stringToHex: function (r) {
        for (var e = "", n = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), t = 0; t < r.length; t++) e += n[r.charCodeAt(t) >> 4] + n[15 & r.charCodeAt(t)];
        return e
    },
    func_trim: function (r, e) {
        return null == r || null == r ? "" : (n = r.replace(/(^\s+)|(\s+$)/g, ""), "g" == e && (n = n.replace(/\s/g, "")), n);
        var n
    },
    findArrayString: function (r, e) {
        for (var n = [], t = r.charAt(0), a = r.length, o = 0; o < e.length; o++) {
            var A = e[o],
                h = !1;
            for (var c in A)
                if ("function" == typeof A[c]) A[c]();
                else {
                    var u = "";
                    null != A[c] && (u = A[c]);
                    for (var f = 0; f < u.length; f++)
                        if (u.charAt(f) == t && u.substring(f).substring(0, a) == r) {
                            h = !0;
                            break
                        }
                }
            h && n.push(A)
        }
        return n
    },
    binary: function (r, e) {
        for (var n = [], t = [], a = 0, o = 0, A = 0; r > 0;) n.push(r % 2), r = parseInt(r / 2), a++;
        for (o = a - 1; o >= 0; o--) t.push(n[o]);
        if (e < t.length && console.log("控制位小于转换位数"), e)
            for (A = t.length; A < e; A++) t.unshift("0");
        return t.join().replace(/,/g, "")
    },
    supplement: function (r, e) {
        if (r.length >= e) return r;
        var n = e - r.length,
            t = r;
        if (n > 0)
            for (var a = 0; a < n; a++) t = "0" + t;
        return t
    },
    hex2int: function (r) {
        for (var e, n = r.length, t = new Array(n), a = 0; a < n; a++) 48 <= (e = r.charCodeAt(a)) && e < 58 ? e -= 48 : e = (223 & e) - 65 + 10, t[a] = e;
        return t.reduce((function (r, e) {
            return r = 16 * r + e
        }), 0)
    }
};

function p(t) {
    for (var e = [], a = 0; a < t.length; a += 2) e.push(parseInt(t.substr(a, 2), 16));
    return e
}


import Door from "./Door"
const door_lock =new Door();

export default class BluetoothDoor{
    data= {
        curItem: {},
        openState: false,
        bleRecord: [],
        communicate_key: '',
        temp_comm_key_key: "",
        time_sync_data: '',
        openResJudge: false,

        bluetoothName: '',
        productKey: '',
        bluetoothSN: ''
    }

    init(bluetoothName,productKey,bluetoothSN){
        this.setData({bluetoothName,productKey,bluetoothSN});
    }

    resetLock(device_name){
       const door= door_lock.getDoorList().find(v=>v.bluetoothName==device_name);
       if(door){
        let curItem={
          bluetoothName: door.bluetoothName,
          productKey: door.productKey,
          bluetoothSN: door.bluetoothSN
        };
        this.setData(curItem);
        this.setData({curItem});
       }
    }
    
    setData(data){
        this.data= Object.assign(this.data, data);  
    }

    async searchOpenDoor(seatch_all){
      const list = door_lock.getDoorList().filter(v=>seatch_all||v.auto).map(v=>v.bluetoothName);
      if(list.length===0) {
          if(seatch_all){
            const title ='请先新增门禁';
            await wx.showToast({ title: title, duration: 1500, icon: 'none' });
            await this.sleep(1500);
            wx.switchTab({
              url: '/pages/lock/lock'
            })
          }
          return;
      };
      console.log('扫描设备列表',list);
      wx.showLoading({ title: seatch_all?'扫描信号开门中...':'自动开门中...', mask: true });
      this.openDoorOnce(list).then(async ()=>{
          await wx.hideLoading();
          await wx.showToast({ title: '自动开门完成', duration: 1500, icon: 'success' });
          await wx.exitMiniProgram();
      }).catch(async (err)=>{
          await wx.hideLoading();
          let err_msg=err.message||err.err_msg||err.errMsg||(typeof err=='string' ?err:'未知错误');
          if(typeof err_msg=='string'&&err_msg.includes("openBluetoothAdapter:fail auth deny")){
            const setting=await wx.getSetting();
            if(!setting.authSetting["scope.bluetooth"]){    
              wx.showModal({
                title: '温馨提示',
                content: '请打开微信蓝牙权限后再试',
                complete: (res) => {
                  if (res.confirm) {
                    wx.openSetting();
                  }
                }
              })
              return 0;
            }
          }
          if(err.errCode&&err.errCode===10001){
            err_msg = "请打开手机蓝牙后再试！";
          }
          await wx.showToast({ title: err_msg, duration: 1500, icon: 'none' });
          console.error(err)
      }).finally(async ()=>{
         // wx.setStorageSync('curItem', curItem);
      });
  }

    openDoor(callback=()=>{}){
        const list = [this.data.bluetoothName];
        wx.showLoading({ title: '开门中...', mask: true });
        this.openDoorOnce(list).then(async ()=>{
            await wx.hideLoading();
            await wx.showToast({ title: '开门完成', duration: 1500, icon: 'success' });
            await wx.exitMiniProgram();
        }).catch(async (err)=>{
            await wx.hideLoading();
            let err_msg=err.message||err.err_msg||err.errMsg||(typeof err=='string' ?err:'未知错误');
            if(typeof err_msg=='string'&&err_msg.includes("openBluetoothAdapter:fail auth deny")){
              const setting=await wx.getSetting();
              if(!setting.authSetting["scope.bluetooth"]){    
                wx.showModal({
                  title: '温馨提示',
                  content: '请打开微信蓝牙权限后再试',
                  complete: (res) => {
                    if (res.confirm) {
                      wx.openSetting();
                    }
                  }
                })
                return 0;
              }
            }
            if(err.errCode&&err.errCode===10001){
              err_msg = "请打开手机蓝牙后再试！";
            }
            await wx.showToast({ title: err_msg, duration: 1500, icon: 'none' });
            console.error(err)
        }).finally(async ()=>{
            callback.call(this);
           // wx.setStorageSync('curItem', curItem);
        });
    }

    async openDoorOnce(deviceNameList) {
        let res_open = await wx.openBluetoothAdapter();
        if (res_open.errno === 0) {
            console.log('初始化蓝牙适配器成功', res_open);
        } else {
            const err_msg = '初始化蓝牙适配器失败';
            console.error(err_msg, res_open);
            throw new Error(err_msg);
        }
        const device = await this.findDevice(deviceNameList);
        this._deviceId = device.deviceId;
        await this.connectBleDevice(device);
        const services = await this.fetchBleServices(device);
        const service = services.find(v => v.isPrimary);
        if (service) {
            this._serviceId = service.uuid;
            const characteristics = await this.fetchBLEDeviceCharacteristics(device, service);
            console.log('特征列表：', characteristics);
            const characteristic = characteristics.find(v => v.properties.write);
            if (characteristic) {
                this._characteristicId = characteristic.uuid;
                const vv = await this.fetchBLECharacteristicValue(characteristic, device, service);
                console.log('特性ID', characteristic.uuid, '获得特征值', vv);
                this.writeData(vv);
                await this.sleep(200);
                let res=await wx.closeBLEConnection({ deviceId: this._deviceId});
                console.log('执行关闭连接',res);
                res=await wx.closeBluetoothAdapter();
                console.log('执行关闭蓝牙适配器',res);
            } else {
                throw new Error('未找到可写特征。。。');
            }
            return service;
        } else {
            throw new Error('无可用服务。。。');
        }
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    writeData(t) {
        var e = this;
        console.log("onBLECharacteristicValueChange", t);
        var a = w(t.value);
        if (
            (console.log("heheda", a, "---", e.data.curItem.productKey),
                4 == t.value.byteLength && 0 == e.data.openState)
        ) {
            e.data.random_value = t.value;
            var s = f(
                t.value,
                e.data.curItem.bluetoothName,
                e.data.curItem.productKey
            );
            console.log("buff", _(s)),
                e.WriteBLECharacteristicValue(s),
                console.log("is four"),
                (e.data.openState = !0);
        }
        if (a.length >= 24) {
            var n = a.substr(0, 2).toUpperCase(),
                o = a.substr(22, 2).toUpperCase();
            if ("A5" == n && "E6" == o)
                console.log("kakaka", a), e.data.bleRecord.push(a);
            else if ("A5" == n && "89" == o)
                console.log("获取通讯密钥的", a), (e.data.communicate_key = a);
            else if ("A5" == n && "86" == o)
                console.log("同步时钟的", a), (e.data.time_sync_data = a);
            else {
                if ("5a" != a.slice(-2)) {
                    s = f(
                        t.value,
                        e.data.curItem.bluetoothName,
                        e.data.curItem.productKey
                    );
                    console.log("buff OpenLock", _(s)),
                        e.WriteBLECharacteristicValue(s);
                }
            }
        }
        // e.data.bleRecord.length > 0 &&
        //   e.recordDataProcessingCommandByMessageData(
        //     a,
        //     e.data.curItem.productKey
        //   );
        var r = a.slice(-2);
        if (
            a.length > 2 &&
            e.data.communicate_key.length > 0 &&
            "5a" == r
        ) {
            (e.data.communicate_key += a),
            console.log("communicate_key222", e.data.communicate_key);
            var i = e.data.communicate_key.substr(24, 32);
            console.log("msgBody2222", i);
            var c = l.des(
                    l.hexToString(e.data.curItem.productKey),
                    l.hexToString(i),
                    0
                ),
                d = l.stringToHex(c);
            console.log("comm_key11=", d);
            var u = d.substr(16, 16);
            e.data.temp_comm_key_key = u;
            var h = g();
            console.log("timebody222", h);
            var m = (function (t, e, a) {
                var s = 6,
                    n = 0;
                console.log(e);
                var o = parseInt(e.substr(3, 2), 16),
                    r = parseInt(e.substr(5, 2), 16),
                    i = parseInt(e.substr(7, 2), 16),
                    c = parseInt(e.substr(9, 2), 16);
                console.log(
                        "设备ID "
                        .concat(o, " ")
                        .concat(r, " ")
                        .concat(i, " ")
                        .concat(c)
                    ),
                    console.log(new Uint8Array(t));
                for (var d = new Uint8Array(t), u = 0, h = 0; h < d.length; h++)
                    u += d[h];
                console.log(u);
                for (var g = 0; g < a.length / 2; g++)
                    u += parseInt(a.substr(2 * g, 2), 16);
                console.log(u);
                var f = _([d[0], d[1], d[2], d[3], d[4], d[5], d[6], 0]);
                console.log(
                    "Bytes2HexString:" + f,
                    l.hexToString(a),
                    l.hexToString(f)
                );
                var m = l.des(l.hexToString(a), l.hexToString(f), 1),
                    x = l.stringToHex(m);
                console.log("DES Test: " + x);
                var b = [o, r, i, c],
                    y = w(t);
                (b = _(b) + "0000" + y),
                console.log("temp_msg2222", b),
                    (b = p(b));
                for (var v = 0, I = 0; I < b.length; I++) v += b[I];
                for (
                    var S = 255 & v, k = p(w(b)), D = k[0], T = 1; T < k.length; T++
                )
                    D ^= k[T];
                s = [
                    165,
                    22,
                    1,
                    o,
                    r,
                    i,
                    c,
                    0,
                    0,
                    S,
                    D,
                    6,
                    parseInt(x.substr(0, 2), 16),
                    parseInt(x.substr(2, 2), 16),
                    parseInt(x.substr(4, 2), 16),
                    parseInt(x.substr(6, 2), 16),
                    parseInt(x.substr(8, 2), 16),
                    parseInt(x.substr(10, 2), 16),
                    parseInt(x.substr(12, 2), 16),
                    parseInt(x.substr(14, 2), 16),
                    n,
                    90,
                ];
                for (var L = 0; L < s.length; L++) n += s[L];
                return (
                    (s[s.length - 2] = ~(255 & n) - 1 + 1),
                    console.log("instruct222333ee", _(s)),
                    s
                );
            })(p(h), "BY8" + e.data.curItem.sn, u);
            console.log("time_buff", _(m)),
                e.WriteBLECharacteristicValue(m),
                (e.data.communicate_key = "");
        }
        if (
            a.length > 2 &&
            e.data.time_sync_data.length > 0 &&
            "5a" == r &&
            e.data.temp_comm_key_key
        ) {
            (e.data.time_sync_data += a),
            console.log("time_sync_data2222", e.data.time_sync_data);
            i = e.data.time_sync_data.substr(24, 16);
            console.log("get msgBody2222", i);
            (c = l.des(
                l.hexToString(e.data.temp_comm_key_key),
                l.hexToString(i),
                0
            )),
            (d = l.stringToHex(c));
            console.log("comm_key33=", d),
                "0000000000000000" == d && console.log("设置同步时钟成功"),
                (e.data.time_sync_data = ""),
                wx.closeBLEConnection({
                    deviceId: this._deviceId,
                    success: function (t) {},
                });
        }
        if (
            40 == a.length &&
            "87" == a.substr(18, 2) &&
            !e.data.openResJudge
        ) {
            if (
                ((e.data.openResJudge = !0),
                    e.isOpenDoorSuccess(a, e.data.curItem.productKey),
                    e.data.curItem.sn)
            ) {
                var x = (function (t, e, a) {
                    var s = 7,
                        n = 0;
                    console.log(e);
                    var o = parseInt(e.substr(3, 2), 16),
                        r = parseInt(e.substr(5, 2), 16),
                        i = parseInt(e.substr(7, 2), 16),
                        c = parseInt(e.substr(9, 2), 16);
                    console.log(
                            "设备ID "
                            .concat(o, " ")
                            .concat(r, " ")
                            .concat(i, " ")
                            .concat(c)
                        ),
                        console.log(new Uint8Array(t));
                    for (
                        var d = new Uint8Array(t), u = 0, h = 0; h < d.length; h++
                    )
                        u += d[h];
                    console.log(u);
                    for (var g = 0; g < a.length / 2; g++)
                        u += parseInt(a.substr(2 * g, 2), 16);
                    console.log(u);
                    var f = _([d[0], d[1], d[2], d[3], 0, 0]);
                    console.log(
                        "Bytes2HexString:" + f,
                        l.hexToString(a),
                        l.hexToString(f)
                    );
                    var m = l.des(l.hexToString(a), l.hexToString(f), 1),
                        x = l.stringToHex(m);
                    console.log("DES Test: " + x);
                    var b = [o, r, i, c],
                        y = w(t);
                    (b = _(b) + "0000" + y),
                    console.log("temp_msg2222", b),
                        (b = p(b));
                    for (var v = 0, I = 0; I < b.length; I++) v += b[I];
                    for (
                        var S = 255 & v, k = p(w(b)), D = k[0], T = 1; T < k.length; T++
                    )
                        D ^= k[T];
                    s = [
                        165,
                        22,
                        1,
                        o,
                        r,
                        i,
                        c,
                        0,
                        0,
                        S,
                        D,
                        9,
                        parseInt(x.substr(0, 2), 16),
                        parseInt(x.substr(2, 2), 16),
                        parseInt(x.substr(4, 2), 16),
                        parseInt(x.substr(6, 2), 16),
                        parseInt(x.substr(8, 2), 16),
                        parseInt(x.substr(10, 2), 16),
                        parseInt(x.substr(12, 2), 16),
                        parseInt(x.substr(14, 2), 16),
                        n,
                        90,
                    ];
                    for (var L = 0; L < s.length; L++) n += s[L];
                    return (
                        (s[s.length - 2] = ~(255 & n) - 1 + 1),
                        console.log("instruct222333ee", _(s)),
                        s
                    );
                })(
                    e.data.random_value,
                    "BY8" + e.data.curItem.sn,
                    e.data.curItem.productKey
                );
                console.log("这里做同步时钟操作 buff2333", _(x)),
                    e.WriteBLECharacteristicValue(x);
            }
        }
    }


    async findDevice(deviceNameList) {
        let res_find = await wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: false,
            powerLevel: "high",
            services: ["0734594A-A8E7-4B1A-A6B1-CD5243059A57"],
        });
        if (res_find.errno === 0) {
            console.log('正在搜索蓝牙设备',deviceNameList, res_find);
        } else {
            const err_msg = '搜索蓝牙设备失败';
            console.error(err_msg, res_find);
            throw new Error(err_msg);
        }
        let tt_start = +new Date();
        let device;
        return new Promise((resolve, reject) => {
            const timer=setInterval(()=>{
                const during = +new Date() - tt_start;
                if (during > 6e3) {
                    clearInterval(timer);
                    const err_msg = '搜索蓝牙设备超时！';
                    reject(err_msg);
                }
            },500);

            wx.onBluetoothDeviceFound(async (vo) => {
                if (device) return;
                // device = vo.devices.find((v) => {
                //     return v.name == deviceName || v.localName == deviceName
                // });
                device = vo.devices.find((v) => deviceNameList.findIndex(vname=>v.localName===vname||v.name===vname)!=-1);

                if (device) {
                    console.log('已找到蓝牙设备 ' , device)
                    let res = await wx.stopBluetoothDevicesDiscovery();
                    if (res.errno === 0) {
                        console.log('已停止搜索蓝牙设备', res);
                        this.resetLock(device.localName);
                        this.resetLock(device.name);
                        resolve(device);
                    } else {
                        const err_msg = '停止搜索蓝牙设备失败';
                        console.error(err_msg, res);
                        reject(err_msg);
                    }
                }
            });
        })
    }
    async connectBleDevice(device) {
        let res = await wx.createBLEConnection({
            deviceId: device.deviceId
        });
        if (res.errno === 0) {
            this.data.openState=false;
            console.log('连接BLE蓝牙设备成功', res);
        } else {
            const err_msg = '连接BLE蓝牙设备失败';
            console.error(err_msg, res);
            throw new Error(err_msg);
        }
    }
    async fetchBleServices(device) {
        let res = await wx.getBLEDeviceServices({
            deviceId: device.deviceId
        });
        if (res.errno === 0) {

            console.log('读取到BLE设备服务列表', res.services)
            return res.services;
        } else {
            const err_msg = '读取BLE设备服务列表失败';
            console.error(err_msg, res);
            throw new Error(err_msg);
        }
    }
    async fetchBLEDeviceCharacteristics(device, service) {
        const res = await wx.getBLEDeviceCharacteristics({
            deviceId: device.deviceId,
            serviceId: service.uuid
        });
        if (res.errno === 0) {
            console.log('读取服务特征Id成功', res);
            return res.characteristics;
        } else {
            const err_msg = '读取服务特征Id失败';
            console.error(err_msg, res);
            throw new Error(err_msg);
        }
    }
    async fetchBLECharacteristicValue(characteristic, device, service) {
        console.log('BLE设备服务特征值ID characteristicId', characteristic.uuid)

        try {
            if (characteristic.properties.notify || characteristic.properties.indicate) {
                let res = await wx.notifyBLECharacteristicValueChange({
                    state: true,
                    deviceId: device.deviceId,
                    serviceId: service.uuid,
                    characteristicId: characteristic.uuid
                });
                if (res.errno === 0) {
                    this.data.openResJudge=false;
                    console.log('订阅特征值变化 success...', res);
                } else {
                    const err_msg = '订阅特征值变化 失败';
                    console.error(err_msg, (res.errno), res);
                    throw new Error(err_msg);
                }
            }
        } catch (error) {
            const err_msg = '订阅特征值变化异常';
            console.error(err_msg, error);
            throw new Error(err_msg);
        }


        //组装三个ID获取到特征值
        let res = await wx.readBLECharacteristicValue({
            deviceId: device.deviceId,
            serviceId: service.uuid,
            characteristicId: characteristic.uuid
        })
        if (res.errno === 0) {
            console.log('组装三个ID获取特征值...', res);
        } else {
            const err_msg = '组装三个ID获取特征值失败';
            console.error(err_msg, (res.errno), res);
            throw new Error(err_msg);
        }

        return new Promise((resove, reject) => {
            wx.onBLECharacteristicValueChange((vv) => {
                console.log('onBLECharacteristicValueChange 特征值改变 ', vv.value)
                resove(vv);
            })
        });

    }

    WriteBLECharacteristicValue(t) {
        var e = this,
            a = new Uint8Array(t.length);
        t.forEach(function (t, e) {
                return (a[e] = t);
            }),
            wx.writeBLECharacteristicValue({
                deviceId: this._deviceId,
                serviceId: this._serviceId,
                characteristicId: this._characteristicId,
                value: a.buffer,
                success: function (t) {
                    console.log("success22222", t);
                },
                fail: function (t) {
                    console.log("err33333", t),
                        -1 != t.errMsg.indexOf("Writing is not permitted") &&
                        e.is_ios &&
                        wx.showModal({
                            title: "提示",
                            content: "本次操作需要重启手机设置的蓝牙。步骤：打开手机【设置】，找到【蓝牙】选项并点击进去，重启蓝牙",
                            showCancel: !1,
                            success: function (t) {},
                        });
                },
            });
    }

    sendBleRecord(t){

    }
    isOpenDoorSuccess(t, e){
        var a = this,
            s = t.substr(20, 16),
            n = l.des(l.hexToString(e), l.hexToString(s), 0),
            o = l.stringToHex(n),
            r = "",
            i = 1;
        if (16 == o.length) {
            var c = o.substr(4, 2);
            "00" == c ? (r = "开门成功", i = 0) : "02" == c ? (r = "门已打开", i = 0) : r = "开门密码无效"
        } else r = "解密失败";
        a.sendBleRecord(i), null != a.data.timer && (clearInterval(a.data.timer), a.data.timer = null, a.data.seconds = 0), wx.showToast({
            title: r
        })
    }
}