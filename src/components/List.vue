<template>
    <div id="list">
        <el-table :data="tableData" stripe align="left" :default-sort="{prop: 'score', order: 'descending'}">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="job" label="职位"></el-table-column>
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
  width: 1024px;
  margin: 0 auto;
}
</style>
<script>
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
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    deleteUser: function(id) {
      this.common.alertWarn("此操作将永久删除该记录，是否继续？", "提示", this) 
        .then((res) => {
            // 如果res为true执行删除操作
            if (res) {
                //根据row.id快速匹配到tableData中的那一行数据并且删除
                this.tableData = this.tableData.filter(ele => {
                    return ele.id !== id;
                });
                this.common.alertMessage("删除成功!", 1 , this);
            }
        }); 
    }
  },
  created() {
    axios
      .get("/getTalentList")
      .then(res => {
        if (res.data.list) {
          this.tableData = res.data.list;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


