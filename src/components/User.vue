<template>
    <div id="user">
        <el-form label-width="100px">
            <el-row>
                <el-col :span="8" :offset="8">
                    <el-form-item label="用户名" prop="name">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="8">
                    <el-form-item label="账号" prop="account">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="8">
                    <el-form-item label="权限" prop="root">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<style scoped>
#user {
    width: 1200px;
    margin: 20px auto 0 auto;
}
</style>
<script>
export default {};
</script>
