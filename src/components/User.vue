<template>
    <div id="user">
        <el-form label-width="100px">
            <el-form-item label="用户名" prop="name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="account">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="权限" prop="root">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped>
#user {
  width: 1024px;
  margin: 0 auto;
}
</style>
<script>
export default {};
</script>
