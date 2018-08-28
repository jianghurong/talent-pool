<template>
    <div id="header">
        <el-menu :default-active="activeIndex" mode="horizontal" select="selectMenu">
            <el-menu-item index="1" class="fa fa-chrome"> 
                LOGO
            </el-menu-item>
            <el-menu-item index="2">
               简历上传 
            </el-menu-item>
            <el-menu-item index="3">用户信息</el-menu-item> 
            <el-menu-item index="4" style="float: right;">
                <el-input v-model="input" placeholder="请输入内容"  class="input-with-select">
                    <el-select v-model="select" slot="prepend">
                        <el-option label="名字" value="1"></el-option>
                        <el-option label="工作经验" value="2"></el-option>
                        <el-option label="职位" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<style scoped>
#header {
    width: 1024px;
    margin: 0 auto;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input: "",
      select: ""
    };
  },
  methods: {
      selectMenu: function(key) {
          if (key != this.activeIndex) {
              switch (key) {
                    case "1" :
                            this.$router.push({path: "/Upload"});
                            break;
                    case "2" :
                            this.$router.push({path: "/Upload"});
                            break;
              }
          }
          
      }
  }
};
</script>

