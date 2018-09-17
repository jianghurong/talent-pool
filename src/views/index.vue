<template>
  <div>
      <Header :activeIndex="activeIndex" @getKeyword="getword" @getActiveIndex="getIndex" @getThemeColor="getColor"></Header>
      <List :keyword="keyword" :themeColor="themeColor" @getDataList="getDataList" v-show="activeIndex === '1'"></List>
      <ResumeUpload v-show="activeIndex === '2'"></ResumeUpload>
      <User v-show="activeIndex === '3'"></User>
      <Charts v-show="activeIndex === '4'" :dataList="dataList"></Charts>
      <Highlight v-show="activeIndex === '5'"></Highlight>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("../components/Header"),
    List: () => import("../components/List"), 
    ResumeUpload: () => import("../components/ResumeUpload"),
    Footer: () => import("../components/Footer"),
    Charts: () => import("../components/Charts"),
    User: () => import("../components/User"),
    Highlight: () => import("../components/Highlight")
  },
  data () {
    return {
      activeIndex: "1",
      keyword: "",
      themeColor: "#29B8F5",
      dataList: []
    }
  },
  methods: {
    /**
     * @method getIndex 更换索引值传到子组件（header）
     * @param { string } index 索引值(1-首页 2-上传 3-信息)
     * @return { undefined }
     */
    getIndex: function(index) {
      this.activeIndex = index;
    },
    /**
     * @method getword 更新关键词传到子组件（header）
     * @param { string } keyword 关键词
     * @return { undefined }
     */
    getword: function(keyword) {
      this.keyword = keyword
    },
    /**
     * @method getColor 更新主题颜色
     * @param { string } value 颜色
     * @return { undefined }
     */
    getColor: function(value) {
      this.themeColor = value;
    },
    /**
     * @method getDataList 更新列表
     * @param { string } 由List子组件传送过来的数据
     * @return { undefined }
     */
    getDataList: function(list) {
      this.dataList = list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
