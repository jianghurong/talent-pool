<template>
    <div id="sidebar">
        <el-menu default-active="1" :collapse="isCollapse" :background-color="bgColor" :text-color="textColor">
            <el-menu-item index="1">
                <i class="fa fa-list"></i>
                <template>
                    人才管理
                </template>
            </el-menu-item>
            <el-menu-item index="2">
                <template>
                    <i class="fa fa-file-pdf-o"></i>
                    简历上传
                </template>
            </el-menu-item>
            <el-menu-item index="3">
                <template>
                    <i class="fa fa-user-o"></i>
                    用户信息
                </template>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title"> 
                    <i class="fa fa-pie-chart"></i>
                    数据统计
                </template>
                <el-menu-item index="4-1">
                    职位统计
                </el-menu-item>
                <el-menu-item index="4-2">经验统计</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style scoped>
/*因为子菜单中template最小宽度是200px*/
#sidebar .el-menu{
    width: 200px;
    height: 100vh;
}
</style>
<script>
export default {
    data () {
        return {
            isCollapse: false,
            bgColor: "#2F6177",
            textColor: "#CCC"
        }
    }
}
</script>
