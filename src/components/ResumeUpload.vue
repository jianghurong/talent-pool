<template>
    <div id="resumeUpload">
        <el-upload class="upload-demo" drag action="http://loveus.top" :before-upload="beforeResumeUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </div>
</template>
<style>
#resumeUpload {
    width: 1024px;
    margin: 20px auto;
}
</style>
<script>
export default {
   methods: {
       /**
        * @method beforeResumeUpload 检测文件上传大小是否超过限制
        * @param { object } file 文件数据
        * @return { boolean } true-正常 false-超出限制
        */
       beforeResumeUpload(file) {
            const isLt5M = file.size / 1024 / 1024 < 5; // 计算file.size是否小于5M，小于5M返回true，大于5M返回false
            if (!isLt5M) {
                 this.$message.error('上传文件大小不能超过 5MB!');
            }
            return isLt5M;
       }
   }
}

</script>
