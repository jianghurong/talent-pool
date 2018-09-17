<template>
    <div id="list">
        <el-table :data="searchData ? searchData : tableData" stripe align="left" :default-sort="{prop: 'score', order: 'descending'}">
            <el-table-column label="姓名">
              <template slot-scope="scope">    
                <span v-html="showData(scope.row.name)"></span>        
              </template>
            </el-table-column>
            <el-table-column label="职位">
              <template slot-scope="scope">
                <el-tag :color="getTagColor(scope.row.job)">
                  <span style="color: #fff" v-html="showData(scope.row.job)"></span>   
                </el-tag>    
              </template>
            </el-table-column>
            <el-table-column prop="workLife" label="工作经验(年)" sortable></el-table-column>
            <el-table-column prop="salaryExpect" label="期望薪资(k/月)" sortable></el-table-column>
            <el-table-column prop="score" label="综合评分" sortable></el-table-column>
            <el-table-column prop="resume" label="简历">
                <template slot-scope="scope">
                    <el-button size="small" type="primary">下载</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="info">编辑</el-button>
                    <el-button size="small" type="danger" @click="deleteUser(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
#list {
  width: 1200px;
  margin: 0 auto 20px auto;
}
</style>
<script>
import common from "../../static/js/common";
// 使用 Mock
const Mock = require("mockjs");
const Random = Mock.Random;
const axios = require("axios");
var data = Mock.mock("/getTalentList", {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|20": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      name: "@cname",
      "job|1": [
        "web前端",
        "Php工程师",
        "Java工程师",
        "Node工程师",
        "Android工程师",
        "Ios工程师",
        "c#工程师"
      ],
      "workLife|0-10": 0,
      "salaryExpect|1-30": 1,
      "score|30-100": 30
    }
  ]
});
export default {
  props: [
    "keyword",
    "themeColor"
  ],
  data() {
    return {
      searchData: null, // 初始化搜索列表的数组
      tableData: [], // 初始化列表数组
    };
  },
  methods: {
    /**
     * @method getTagColor 根据对应职位获取标签颜色
     * @param job 职位
     * @return { string } 返回颜色
     */
    getTagColor: function(job) {
      let color = "";
      switch (job) {
        case "web前端":
              color = "#409EFF";
              break;
        case "Node工程师":
              color = "#67C23A";
              break;
        case "Php工程师":
              color = "#88A6C5";
              break;
        case "Java工程师":
              color = "#D76D3F"; 
              break;
        default:
              color = this.themeColor;
              break;
      }
      return color;
    },
    /** 
     * @method deleteUser 删除指定人才数据
     * @param { nubmer } id 人才标识
     * @return { undefined }
    */
    deleteUser: function(id) {
      this.common.alertWarn("此操作将永久删除该记录，是否继续？", "提示", this) 
        .then((res) => {
            // 如果res为true执行删除操作
            if (res) {
                if (this.keyword) {
                   //根据row.id快速匹配到tableData中的那一行数据并且删除
                    this.searchData = this.searchData.filter(ele => {
                    this.tableData = this.tableData.filter(ele => {
                      return ele.id !== id;
                    });
                    return ele.id !== id;
                    });
                }
                else {
                   //根据row.id快速匹配到tableData中的那一行数据并且删除
                    this.tableData = this.tableData.filter(ele => {
                    return ele.id !== id;
                    });
                }
                this.common.alertMessage("删除成功!", 1 , this);
            }
        }); 
    },
    /**
     * @method getData 获取人才列表
     * @return { undefined }
     */
    getData: function() {
      axios
      .get("/getTalentList")
      .then(res => {
        if (res.data.list) {
          this.tableData = res.data.list;
          this.$emit("getDataList", res.data.list);
        }
      })
      .catch(err => {
        console.log(err);
      });
    },
    /**
     * @method showData 搜索结果关键词高亮
     * @param { string } val 搜索结果（高亮前）
     */
    showData: function(val) {
        val = val + '';
        let color = this.themeColor;
        return val.replace(this.keyword, '<font color="'+ color + '">' + this.keyword + '</font>');
    }
  },
  created() {
    this.getData();
  },
  watch: {
    keyword:{
      /**
       * @method handler 根据关键词匹配列表搜索结果
       * @return { undefined }
       */
      handler: function() {
        if(this.keyword) {
          this.searchData = this.tableData.filter((ele) => {
            // 匹配姓名与关键词
            if (ele.name === this.keyword) {
              return ele;
            }
            // 匹配职位与关键词
            else if (ele.job === this.keyword) {
              return ele;
            }
          });
        }
        else {
          // 初始化搜索列表
          this.searchData = null;
        }
      }
    }
  }
};
</script>


