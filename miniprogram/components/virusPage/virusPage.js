// components/virusPage/virusPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItemsProps: {
      type: Array,
      value: [0, 0, 0, 0, 0, 0, 0]
    },
    level: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    level: 0,
    index: [0, 1, 2, 3, 4, 5, 6],
    selectedItems: [0, 0, 0, 0, 0, 0, 0],
    imgSrc:[
      [
        "./xiaodu/xishou.png",
        "./xiaodu/xishou_HL_0.png",
        "./xiaodu/xishou_HL_1.png",
        "./xiaodu/xishou_HL_2.png",
        "./xiaodu/xishou_HL_3.png",
        "./xiaodu/xishou_HL_4.png",
        "./xiaodu/xishou_HL_5.png",
        "./xiaodu/xishou_HL_6.png"
      ],
      [
        "./xiaodu/jiujing.png",
        "./xiaodu/jiujing_HL_0.png",
        "./xiaodu/jiujing_HL_1.png",
        "./xiaodu/jiujing_HL_2.png",
        "./xiaodu/jiujing_HL_3.png",
        "./xiaodu/jiujing_HL_4.png",
        "./xiaodu/jiujing_HL_5.png",
        "./xiaodu/jiujing_HL_6.png"
      ],
      [
        "./xiaodu/xiaodu.png",
        "./xiaodu/xiaodu_HL_0.png",
        "./xiaodu/xiaodu_HL_1.png",
        "./xiaodu/xiaodu_HL_2.png",
        "./xiaodu/xiaodu_HL_3.png",
        "./xiaodu/xiaodu_HL_4.png",
        "./xiaodu/xiaodu_HL_5.png",
        "./xiaodu/xiaodu_HL_6.png"
      ],
      [
        "./xiaodu/kouzhao.png",
        "./xiaodu/kouzhao_HL_0.png",
        "./xiaodu/kouzhao_HL_1.png",
        "./xiaodu/kouzhao_HL_2.png",
        "./xiaodu/kouzhao_HL_3.png",
        "./xiaodu/kouzhao_HL_4.png",
        "./xiaodu/kouzhao_HL_5.png",
        "./xiaodu/kouzhao_HL_6.png"
      ],
      [
        "./xiaodu/shoutao.png",
        "./xiaodu/shoutao_HL_0.png",
        "./xiaodu/shoutao_HL_1.png",
        "./xiaodu/shoutao_HL_2.png",
        "./xiaodu/shoutao_HL_3.png",
        "./xiaodu/shoutao_HL_4.png",
        "./xiaodu/shoutao_HL_5.png",
        "./xiaodu/shoutao_HL_6.png"
      ],
      [
        "./xiaodu/fangdumianju.png",
        "./xiaodu/fangdumianju_HL_0.png",
        "./xiaodu/fangdumianju_HL_1.png",
        "./xiaodu/fangdumianju_HL_2.png",
        "./xiaodu/fangdumianju_HL_3.png",
        "./xiaodu/fangdumianju_HL_4.png",
        "./xiaodu/fangdumianju_HL_5.png",
        "./xiaodu/fangdumianju_HL_6.png"
      ],
      [
        "./xiaodu/fanghuafu.png",
        "./xiaodu/fanghuafu_HL_0.png",
        "./xiaodu/fanghuafu_HL_1.png",
        "./xiaodu/fanghuafu_HL_2.png",
        "./xiaodu/fanghuafu_HL_3.png",
        "./xiaodu/fanghuafu_HL_4.png",
        "./xiaodu/fanghuafu_HL_5.png",
        "./xiaodu/fanghuafu_HL_6.png"
      ]
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
      this.data.selectedItemsProps[data.id] = this.data.selectedItemsProps[data.id] == 1 ? 0 : 1;
      console.log("现在：" + this.data.selectedItemsProps)
      this.data.level = (this.data.selectedItemsProps[0] +
        this.data.selectedItemsProps[1] +
        this.data.selectedItemsProps[2] +
        this.data.selectedItemsProps[3] +
        this.data.selectedItemsProps[4] +
        this.data.selectedItemsProps[5] +
        this.data.selectedItemsProps[6]);

      this.setData({
        selectedItems: this.data.selectedItemsProps,
        level: this.data.level
      });
      console.log("level: " + this.data.level);
    }
  }
})
