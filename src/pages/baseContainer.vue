<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { CommonHeader } from '#/components'

export default {
  components: {
    CommonHeader
  }
}
</script>

