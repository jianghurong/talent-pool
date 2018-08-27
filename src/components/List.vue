<template>
    <div id="list">
        <el-table :data="tableData" align="left">
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="job" label="职位"></el-table-column>
            <el-table-column prop="workLife" label="工作经验" sortable></el-table-column>
            <el-table-column prop="salaryExpect" label="期望薪资(月)" sortable></el-table-column>
            <el-table-column prop="score" label="综合评分" sortable></el-table-column>
            <el-table-column prop="resume" label="简历">
                <template slot-scope="scope">
                    <el-button size="small" type="primary">查看</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="info">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
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
export default {
    data() {
        return {
            tableData: [{
                name: "金泫雅",
                job: "明星",
                workLife: "10",
                salaryExpect: "12k-15k",
                score: "100"
            }]
        }
    }
}
</script>


