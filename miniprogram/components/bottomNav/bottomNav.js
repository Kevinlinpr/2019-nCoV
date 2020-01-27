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
    selected: 0,
    color: "#90a4ae",
    selectedColor: "#008394",
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
      this.setData({selected:0});
    },
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e){
      const data = e.currentTarget.dataset;
      if (data.index == this.data.selected) {
        return;
      }
      this.setData({ selected: data.index });
      this.triggerEvent('myevent', { selectedBottomNavToIndex: data.index });
    }
  }
})


