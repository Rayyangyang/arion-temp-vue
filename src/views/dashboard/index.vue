<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
  setup() {
    const name = ref('123');
    console.log(123);
    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
