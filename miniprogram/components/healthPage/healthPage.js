// components/healthPage/healthPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItemsProps:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:[0,1,2,3,4,5,6],
    selectedItems:[0,0,0,1,0,0,0],
    itemImageLib:[
      {
        unSelected:"./ganmao.png",
        selected:"./ganmao_HL.png"
      },
      {
        unSelected: "./changweibushi.png",
        selected: "./changweibushi_HL.png"
      },
      {
        unSelected: "./kesou.png",
        selected: "./kesou_HL.png"
      },
      {
        unSelected: "./zhengchang.png",
        selected: "./zhengchang_HL.png"
      },
      {
        unSelected: "./fashao.png",
        selected: "./fashao_HL.png"
      },
      {
        unSelected: "./huxikunnan.png",
        selected: "./huxikunnan_HL.png"
      },
      {
        unSelected: "./toutong.png",
        selected: "./toutong_HL.png"
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function(e){
      wx.vibrateShort();
      const data = e.currentTarget;
      console.log("点击了："+data.id);
      console.log("原本："+this.data.selectedItemsProps)
      if(data.id==3){
        this.data.selectedItemsProps = [0,0,0,0,0,0,0];
        this.data.selectedItemsProps[3] = 1;
      }else{
        if(this.data.selectedItemsProps[3]==1){
          this.data.selectedItemsProps[3] = 0;
          this.data.selectedItemsProps[data.id] = 1;
        }else{
          let count = (this.data.selectedItemsProps[0] +
            this.data.selectedItemsProps[1] +
            this.data.selectedItemsProps[2] +
            this.data.selectedItemsProps[3] +
            this.data.selectedItemsProps[4] +
            this.data.selectedItemsProps[5] +
            this.data.selectedItemsProps[6]);
          if(count>1){
            this.data.selectedItemsProps[data.id] = this.data.selectedItemsProps[data.id]==1?0:1;
          }else{
            if (this.data.selectedItemsProps[data.id]==1){
              this.data.selectedItemsProps[data.id] = 0;
              this.data.selectedItemsProps[3] = 1;
            }else{
              this.data.selectedItemsProps[data.id] = 1;
            }
          }
        }
      }
      this.setData({
        selectedItems:this.data.selectedItemsProps
      })
      this.triggerEvent('updatehealthevent', { healthPageSelected: this.data.selectedItemsProps });
    }
  }
})
