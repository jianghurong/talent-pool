<template>
    <div id="list">
        <el-table :data="tableData" align="left">
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="job" label="职位"></el-table-column>
            <el-table-column prop="workLife" label="工作经验" sortable></el-table-column>
            <el-table-column prop="score" label="综合评分" sortable></el-table-column>
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
                score: "100"
            }]
        }
    }
}
</script>


