<template>
    <div class="buttonS1">
        <button v-on:click="sz(showTxt)" v-text="showTxt"></button>
    </div>
</template>
<script>
export default {
    name: 'showTxt',
    props: {
        showTxt: String,

    },
    methods:{
        sz:function(e){
            this.$emit("listenToChildEvent",e);
        }
    }
}
</script>
<style scoped>
:root {
  --mainColor:red;
  --onewidth:100%;
  --oneheight:500px;
  --boxBgColor:#ccc;
  --btnBColor:#fff;
  --btnBRcolor:#ccc;
  --pJbColor1:#fff;
  --pJbcolor2:color(#000 alpha(50%));
  --PColor:#000;
}
body {
  color: var(--mainColor);
  font-family: system-ui;
  overflow-wrap: break-word;
  background:--mainColor;
}
.buttonS1{
    float: left;
}
.buttonS1{
    width:120px;
}
.buttonS1 button{
  width:100%;
  height:38px;
  line-height:38px;
  text-align:center;
  background-color:var(--btnBColor);
  border:1px solid var(--btnBRcolor);
  font-size:20px;
}
button:active{
    background-color:#000
}

</style>