<template>
  <div class="page page-cell">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-innner page-cell-inner">
        <mt-cell-swipe
          v-for="n in 10"
          :left="rightButtons"
          title="swipe me">
        </mt-cell-swipe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: this.$route.name,
        rightButtons: []
      }
    },

    created() {
      console.log(this)
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$toast('delete')
        }
      ];
    },

    methods: {
      /*leftButtonHandler(evt) {
        console.log(123);
      }*/
    }
  };
</script>
