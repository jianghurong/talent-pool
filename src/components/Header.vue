<template>
    <div id="header">
        <el-row>
          <el-col :span="12">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="selectMenu">
                    <el-menu-item index="1">
                        <span class="fa fa-chrome" :style="{color: themeColor}">&nbsp;</span> 
                        <font :color="themeColor">TALENT-POOL</font>
                    </el-menu-item>
                    <el-menu-item index="2">
                        简历上传 
                    </el-menu-item>
                    <el-menu-item index="3">用户信息</el-menu-item>
                    <el-menu-item index="4">图表数据</el-menu-item>
                    <!-- <el-menu-item index="5">代码高亮</el-menu-item> -->
                </el-menu>
          </el-col>
          <el-col class="header-title header-border_bottom" :style="{ color: themeColor }" :span="4">{{title}}</el-col>
          <el-col class="header-picker_color header-border_bottom" :span="2">
              <el-color-picker v-model="themeColor" @change="changeColor"></el-color-picker>
          </el-col>
          <el-col class="header-search header-border_bottom" :span="6">
                <el-input v-model="input" placeholder="请输入内容(姓名或职位)" @change="searchData">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
          </el-col>
        </el-row>
    </div>
</template>
<style scoped>
#header {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
}
.header-border_bottom {
    border-bottom: 1px solid #e6e6e6;
}
.header-title {
    font-weight: bold;
    height: 61px;
    line-height: 61px;
}
.header-picker_color {
    padding: 8px 0 8px 0;
}
.header-search{
    padding: 9px 0 11px 0;
}
</style>
<script>
export default {
    props: [
        "activeIndex"
    ],
    data() {
        return {
            themeColor: "#29B8F5",
            input: "",
            title: "",
        };
    },
    created() {
        this.setTitleText("TALENT-POOL");
    },
    methods: {
        /**
         * @method selectMenu 切换标题栏
         * @param { string } key 索引值(1-首页 2-上传 3-信息)
         * @return { undefined }
         */
        selectMenu: function(key) {
            if (key != this.activeIndex) {
                this.$emit("getActiveIndex", key);
            }
        },
        /**
         * @method searchData input值改变时搜索数据
         * @param { number } value input值
         * @return { undefined }
         */
        searchData: function(value) {
            this.$emit("getKeyword", value);
        },
        /**
         * @method changeColor 改变全局变量的颜色
         * @param { string } value 选择器颜色值
         */
        changeColor: function(value) {
             this.$emit("getThemeColor", value);
        },
        /**
         * @method setTitleText 打字特效
         * @param { string } text 输出文字
         */
        setTitleText: function(text) {
            let i = 0,
                length = text.length,
                that = this;
            (function go() {
                if (i <= text.length) {
                    that.title = text.slice(0, i++).concat("_");
                    var time = setTimeout(go , 300);
                }
                else {
                    that.title = that.title.substring(0, that.title.length - 1);
                }
            }) ()
        }
    }
};
</script>

