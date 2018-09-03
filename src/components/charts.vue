<template>
    <div id="charts">
        <div ref="JobEcharts" class="echarts" :style="{width: '512px', height: '400px'}"></div>
        <div ref="workLifeEcharts" class="echarts" :style="{width: '512px', height: '400px'}"></div>
    </div>
</template>
<style scoped>
.echarts {
    margin: 40px auto;
    text-align: center;
}
</style>
<script>
import echarts from "echarts";
import option from "../../static/js/echartsOption";
export default {
    props: [
        "dataList"
    ],
    data () {
        return {
        }
    },
    methods: {
        /**
         * @method getJobList 获取职位列表
         * @param { object } property 获得对应属性数组
         * @return { array } 返回职位列表数组
         */
        getList: function(property) {
            // 使用map方法返回调用函数处理后的值组成的新数组,filter返回符合条件的项
            return this.dataList.map((ele) => {
                return ele[property];
            });
        },
        /**
         * @method setJobCharts 建立职位统计图
         * @return { undefined }
         */
        setJobCharts: function(dom) {
            // 初始化echarts渲染区域
            let charts = echarts.init(dom);
            // 职位数组去重并赋值
            let list = this.getList("job");
            let jobList = Array.from(new Set(list));
            let jobList2 = jobList.map((ele) => {
                let count = 0;
                // 使用forEach调用每个元素的回调函数
                list.forEach((ele2) => {
                    if (ele === ele2) {
                        count++;
                    }
                })
                return { value: count, name: ele};
            })
            charts.setOption(option.setEchartsPieOption("TALENT-POOL 职位统计图", jobList, jobList2));
            let charts2 = echarts.init(this.$refs.workLifeEcharts);
            let list2 = this.getList("workLife");
            let workLifeList = Array.from(new Set(list2));
            workLifeList = workLifeList.map(ele => ele + "年")
            let workLifeList2 = workLifeList.map((ele) => {
                let count = 0;
                // 使用forEach调用每个元素的回调函数
                list2.forEach((ele2) => {
                    if (ele === ele2 + "年") {
                        count++;
                    }
                })
                return { value: count, name: ele};
            })
            charts2.setOption(option.setEchartsPieOption("TALENT-POOL 工作经验统计图",workLifeList, workLifeList2));
        },
    },
    mounted () {
        this.setJobCharts(this.$refs.JobEcharts);
    }
}
</script>
