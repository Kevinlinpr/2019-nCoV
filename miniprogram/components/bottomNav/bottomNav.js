// components/bottomNav/bottomNav.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    marginTop:[
      "0px",
      "0px",
      "0px",
      "0px"
    ],
    selectedColor:[
      "#f44336",
      "#ff9800",
      "#03a9f4",
      "#009688"
    ],
    imgWidth:[
      "27px",
      "27px",
      "27px",
      "27px"
    ],
    imgHeight:[
      "27px",
      "27px",
      "27px",
      "27px"
    ],
    fontSize: [
      "10px",
      "10px",
      "10px",
      "10px"
    ],
    selected: 0,
    color: "#90a4ae",
    list: [{
      iconPath: "health.png",
      selectedIconPath: "health_HL.png",
      text: "健康情况"
    }, {
      iconPath: "activity.png",
      selectedIconPath: "activity_HL.png",
      text: "活动范围"
    }, {
      iconPath: "virus.png",
      selectedIconPath: "virus_HL.png",
      text: "消毒水平"
    }, {
      iconPath: "social.png",
      selectedIconPath: "social_HL.png",
      text: "社会关系"
    }]
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      this.triggerEvent('myevent', { selectedBottomNavToIndex: 0 });
      this.setData({ selected: 0, fontSize: ["13px", "10px", "10px", "10px"], imgHeight: ["36px", "27px", "27px", "27px"], imgWidth:["36px", "27px", "27px", "27px"]});
    },
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e){
      wx.vibrateShort();
      const data = e.currentTarget.dataset;
      if (data.index == this.data.selected) {
        return;
      }
      this.setData({ selected: data.index, 
      fontSize: [
        data.index == 0 ? "13px" : "10px", 
        data.index == 1 ? "13px" : "10px",
        data.index == 2 ? "13px" : "10px", 
        data.index == 3 ? "13px" : "10px"], 
      imgHeight: [
        data.index == 0 ? "36px" : "27px", 
        data.index == 1 ? "36px" : "27px", 
        data.index == 2 ? "36px" : "27px",
        data.index == 3 ? "36px" : "27px"], 
      imgWidth: [
        data.index == 0 ? "36px" : "27px", 
        data.index == 1 ? "36px" : "27px", 
        data.index == 2 ? "36px" : "27px", 
        data.index == 3 ? "36px" : "27px"]
      });
      this.triggerEvent('myevent', { selectedBottomNavToIndex: data.index });
      
    }
  }
})


