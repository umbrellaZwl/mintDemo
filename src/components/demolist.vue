<template>
  <section class="page-demo">
    <div class="page-title">{{navs.title}}</div>
    <mt-cell 
      v-for="item in navs.list"
      :title="item.name"
      :to="item.path"
      is-link>
      <div slot="title">
        <i :class="['indexicon', 'icon-' + item.icon]"></i>
        <span>{{ item.name }}</span>
      </div>
    </mt-cell>
  </section>
</template>
<style lang="less">
  .page-demo {

    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }

    .page-title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }

  }
</style>
<script>

  export default {
    name: 'Demolist',
    props: ['navs'],
    data(){
      return {
        
      }
    }
  }
</script>