<template>
  <div>
    <svg class="icon-svg">
      <use :xlink:href="`#${icon}`" />
    </svg>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  props:{
    icon:{
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style>

</style>