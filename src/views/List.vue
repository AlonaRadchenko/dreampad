<template>
  <div class="holder">
    <div>
      <b-alert :key="dream.description" v-for='dream in dreams' show>
        {{ dream.description }}
        </b-alert>
        <b-button variant="primary" @click="$router.push('/')" >
        <font-awesome-icon icon="plus" />
         Add dream
     </b-button>

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['dreams']),

  }
}
</script>

<style lang="scss" scoped>
.holder {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background:rgba($color: #ffffff, $alpha: 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
