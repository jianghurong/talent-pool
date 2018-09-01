export default {
    /**
     * @method setEchartsPieOption 配置饼图
     * @param { array } data 饼图数据说明
     * @param { array } data2 饼图内部数据说明
     * @return { object } 饼图配置 
     */
    setEchartsPieOption: function(text, data, data2) {
        return {
            title : {
                text: text,
                subtext: 'By Answer',
                x: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                data: data
            },
            series : [
                {
                    name: text,
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: data2,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
        };
    }
};