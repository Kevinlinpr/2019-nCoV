//index.js
Component({

  behaviors: [],

  properties: {
    healthPageSelectedProps:{
      type: Array,
      value: [0,0,0,1,0,0,0]
    },
    virusPageSelectedProps:{
      type: Array,
      value: [0,0,0,1,0,0,0]
    },
    socialPageSelectedProps:{
      type: Array,
      value: [1,0]
    }
  },
  data: {
    healthPageSelected:[0,0,0,1,0,0,0],
    virusPageSelected:[0,0,0,0,0,0,0],
    socialPageSelected:[0,0]
  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

  methods: {
    onMyEvent: function (e) {
      this.setData({
        selectedBottomNavToIndex: e.detail.selectedBottomNavToIndex
      });
    },
    onUpdateHealthEvent: function (e) {
      this.data.healthPageSelectedProps = e.detail.healthPageSelected;
      this.setData({
        healthPageSelected: this.data.healthPageSelectedProps
      });
      console.log("father health:"+this.data.healthPageSelectedProps);
      console.log("father virus:" + this.data.virusPageSelectedProps);
      console.log("father social:" + this.data.socialPageSelectedProps);
    },
    onUpdateVirusEvent: function (e) {
      this.data.virusPageSelectedProps = e.detail.virusPageSelected;
      this.setData({
        virusPageSelected: this.data.virusPageSelectedProps
      });
      this.setData({
        level: (this.data.virusPageSelectedProps[0]+
          this.data.virusPageSelectedProps[1] +
          this.data.virusPageSelectedProps[2] +
          this.data.virusPageSelectedProps[3] +
          this.data.virusPageSelectedProps[4] +
          this.data.virusPageSelectedProps[5] +
          this.data.virusPageSelectedProps[6] )
      });
      console.log("father health:" + this.data.healthPageSelectedProps);
      console.log("father virus:" + this.data.virusPageSelectedProps);
      console.log("father social:" + this.data.socialPageSelectedProps);
    },
    onUpdateSocialEvent: function (e) {
      this.data.socialPageSelectedProps = e.detail.socialPageSelected;
      this.setData({
        socialPageSelected: this.data.socialPageSelectedProps
      });
      console.log("father health:" + this.data.healthPageSelectedProps);
      console.log("father virus:" + this.data.virusPageSelectedProps);
      console.log("father social:" + this.data.socialPageSelectedProps);
    }
  }
})