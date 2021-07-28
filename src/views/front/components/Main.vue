<template>
  <el-main
    ><h3>Main</h3>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="latest">
      <el-divider content-position="left">预告</el-divider>
      <!-- <el-container> -->
      <div
        class="dongmanItem"
        v-for="(item, index) in dongmanItemList"
        :key="item.index"
      >
        <a href="javascript:void(0);">
          <div class="dongmanImg">
            <!-- <img :src="item.src" alt="" /> -->
            <!-- 节省流量先用本地图片替代 -->
            <img src="../../../assets/images/mayue.png" alt="" />
          </div>
          <div class="dongmanTitle">
            <p title="满月之战">{{ index }}{{ item.name }}</p>
          </div></a
        >
      </div>

      <!-- </el-container> -->
    </div>
    <div class="main-right">
      <div class="announce">
        <el-divider>公告</el-divider>
        <p>dadss afd sad fsa das d sa</p>
      </div>
      <div class="topList">
        <el-divider>排行榜</el-divider>
        这里是排行榜
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      dongmanItemList: [
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
        {
          name: "【4月】满月之战",
          src: "https://z3.ax1x.com/2021/07/27/W4yPH0.png",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
// .el-carousel .el-carousel__container{
//   height: 300px;
// }
a{
  text-decoration: none;
  // color: rgb(50, 180, 180);
  color: #475669;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-container {
  border: 1px solid;
}
.latest {
  // overflow: hidden;
  float: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  // align-items: center;
  width: 70%;
  // margin: 0 auto;
  .dongmanItem {
    // height: 1;
    width: 160px;
    overflow: hidden;
    float: left;
    margin: 0 15px 10px 0;

    .dongmanImg {
      display: flex;
      align-items: center;
      img {
        width: 160px;
        height: 100px;
      }
    }
    .dongmanTitle p {
      margin: 0 5px;
      font-size: 12px;
      text-align: left;
      overflow: hidden; /*溢出隐藏*/
      white-space: nowrap; /*不换行*/
      text-overflow: ellipsis; /*超出部分省略号显示*/
    }
  }
}
.main-right {
  // position: absolute;
  // right: 0;
  float: right;
  overflow: hidden;
  width: 20%;
  height: 300px;
  // background-color: rgb(202, 207, 183);
}
// .latest::after{
//   content: "";
//   display: block;
//   // flex-grow: 1;
//   width: 160px;
//   height: 0;
//   margin: 0 15px 10px 0;
// }
</style>