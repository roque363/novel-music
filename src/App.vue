<template>
  <nm-header />
  <router-view class="nm-layout" />
  <nm-footer />
</template>

<script>
import NmHeader from '@/components/layout/Header.vue';
import NmFooter from '@/components/layout/Footer.vue';

export default {
  name: 'App',
  components: { NmHeader, NmFooter },
};
</script>
