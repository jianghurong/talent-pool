
export default {
    themeColor: "red",
    /**
     * @ method 弹出提示框
     * @ param text: 提示内容
     * @ param title:  提示标题
     * @ param that: 指向调用该函数的作用域
     */
    alertWarn: (text, title , that) => {
        return new Promise((resolve, reject) => {
            that.$confirm(text, title, {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            });
        });
    },
    /** 
     * @ method 弹出信息框
     * @ param text: 信息内容
     * @ param type: 信息框类型（1为成功）
     * @ param that: 指向调用该函数的作用域
     */
    alertMessage: (text, type, that) => {
        type = {"1": "success"}[type];
        that.$message({
            type: type,
            message: text
        });
    }
};
