<template>
    <div>
        
    </div>
<!-- <p v-html="abc" v-hljs></p> -->
</template>
<style scoped>
</style>
<script>
import hljs from "highlight.js";
export default {
    data () {
        return {
            // abc: "html"
        }
    },
    directives: {
        hljs: function(el) {
             let blocks = el.querySelectorAll('pre code');
             Array.prototype.forEach.call(blocks, hljs.highlightBlock);
        }
    },
    computed: function () {
        this.getReady(); // Ready
 
    hljs.initHighlightingOnLoad();

    }
}
</script>
