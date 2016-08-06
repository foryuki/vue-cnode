<template>
  <svg :class="iconClass">
    <use xlink:href="#{{symbol}}"></use>
  </svg>
</template>

<script>
{
  const _require = require.context('#/assets/icons', true, /\.svg$/)
  _require.keys().forEach(key => _require(key))
}

export default {
  props: [
    'symbol',
    'className'
  ],
  computed: {
    iconClass() {
      const { symbol, className } = this
      return className ? `icon icon-${symbol} ${className}` : `icon icon-${symbol}`
    }
  }
}
</script>

<style>
.icon {
  width: 0.26rem;
  height: 0.26rem;
  fill: currentColor;
  overflow: hidden;
}
</style>