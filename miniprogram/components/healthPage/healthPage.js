// components/healthPage/healthPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItemsProps:{
      type: Array,
      value: [0,0,0,0,0,0,0]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:[0,1,2,3,4,5,6],
    selectedItems:[0,0,0,0,0,0,0],
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
      const data = e.currentTarget;
      console.log("点击了："+data.id);
      console.log("原本："+this.data.selectedItemsProps)
      this.data.selectedItemsProps[data.id] = this.data.selectedItemsProps[data.id] == 1?0:1;
      console.log("现在：" + this.data.selectedItemsProps)
      this.setData({
        selectedItems:this.data.selectedItemsProps
      })
    }
  }
})
