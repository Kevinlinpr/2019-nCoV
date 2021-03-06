// components/socialPage/socialPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItemsProps: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: [0, 1],
    selectedItems: [0, 0],
    itemImageLib: [
      {
        unSelected: "./shejiao/zaiwai.png",
        selected: "./shejiao/zaiwai_HL.png"
      },
      {
        unSelected: "./shejiao/zaijia.png",
        selected: "./shejiao/zaijia_HL.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function (e) {
      wx.vibrateShort();
      const data = e.currentTarget;
      console.log("点击了：" + data.id);
      console.log("原本：" + this.data.selectedItemsProps)
      let count = this.data.selectedItemsProps[0]+this.data.selectedItemsProps[1];
      if(count>0){
        if(this.data.selectedItemsProps[data.id]==1){
          this.data.selectedItemsProps[data.id] = 0;
        }else{
          this.data.selectedItemsProps = [0,0];
          this.data.selectedItemsProps[data.id] = 1;
        }
      }else{
        this.data.selectedItemsProps[data.id] = 1;
      }
      console.log("现在：" + this.data.selectedItemsProps)
      this.setData({
        selectedItems: this.data.selectedItemsProps
      });
      this.triggerEvent('updatesocialevent', { socialPageSelected: this.data.selectedItemsProps });
    }
  }
})
