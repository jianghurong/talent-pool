<template>
    <div id="header">
        <el-row>
          <el-col :span="12">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="selectMenu">
                    <el-menu-item index="1">
                        <span class="fa fa-chrome" :style="{color: color}">&nbsp;</span> 
                        <font :color="color">TALENT-POOL</font>
                    </el-menu-item>
                    <el-menu-item index="2">
                        简历上传 
                    </el-menu-item>
                    <el-menu-item index="3">用户信息</el-menu-item>
                </el-menu>
          </el-col>
          <el-col class="color-picker" :span="6">
              <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
          </el-col>
          <el-col class="search" :span="6">
                <el-input v-model="input" placeholder="请输入内容(姓名或职位)" @change="searchData">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
          </el-col>
        </el-row>
    </div>
</template>
<style scoped>
#header {
    width: 1024px;
    margin: 0 auto;
}
.color-picker {
    padding: 8px 0 8px 0;
    border-bottom: solid 1px #e6e6e6
}
.search {
    padding: 9px 0 11px 0;
    border-bottom: solid 1px #e6e6e6
}
</style>
<script>
export default {
    props: [
        "activeIndex"
    ],
    data() {
        return {
            color: "#32C3EF",
            input: ""
        };
    },
    methods: {
        /**
         * @method 切换标题栏
         * @param { number } key 索引值(1-首页 2-上传 3-信息)
         * @return { undefined }
         */
        selectMenu: function(key) {
            if (key != this.activeIndex) {
                this.$emit("getActiveIndex", key);
            }
        },
        /**
         * @method input值改变时搜索数据
         * @param { number } value input值
         * @return { undefined }
         */
        searchData: function(value) {
            this.$emit("getKeyword", value);
        },
        /**
         * @method 改变全局变量的颜色
         * @param { string } value 选择器颜色值
         */
        changeColor: function(value) {
            this.common.themeColor = value;
        }
    }
};
</script>

