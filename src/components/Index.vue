<template>
  <div>
      <SideBar></SideBar>
      <Header :activeIndex="activeIndex" @getKeyword="getword" @getActiveIndex="getIndex"></Header>
      <List :keyword="keyword" v-show="activeIndex === '1'"></List>
      <ResumeUpload v-show="activeIndex === '2'"></ResumeUpload>
      <User v-show="activeIndex === '3'"></User>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import SideBar from "./SideBar";
import List from "./List";
import ResumeUpload from "./ResumeUpload";
import User from "./User";
import Footer from "./Footer";
export default {
  components: {
    Header,
    SideBar,
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
    getIndex: function(index) {
      this.activeIndex = index;
    },
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
