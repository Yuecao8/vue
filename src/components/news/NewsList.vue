<template>
    <div>
        <ul class="mui-table-view" v-for="item in newList" :key="item.id">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'newsInfo/' + item.id"  class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.add_time | dateFormat}}</span>
                            <span>点击：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            newList:null
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            this.$http.get('api/getnewslist').then(res=>{
                if(res.body.status===0){
                    this.newList = res.body.message;
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
    .mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
