<template>
  <div>
      <Header :activeIndex="activeIndex" @getKeyword="getword" @getActiveIndex="getIndex"></Header>
      <List :keyword="keyword" v-show="activeIndex === '1'"></List>
      <ResumeUpload v-show="activeIndex === '2'"></ResumeUpload>
      <User v-show="activeIndex === '3'"></User>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
import ResumeUpload from "./ResumeUpload";
import User from "./User";
import Footer from "./Footer";
export default {
  components: {
    Header,
    List, 
    ResumeUpload,
    Footer,
    User
  },
  data () {
    return {
      activeIndex: "1",
      keyword: ""
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
