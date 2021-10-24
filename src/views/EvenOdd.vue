<template>
  <div>
    <h2>Slot demo</h2>
    <div
      v-for="num in numberArray"
      :key="num"
    >
      <slot name="evenOdd" :num="num">
		  <span>Fall back content: </span>
		  <span>{{ num }}</span>
      </slot>
    </div>
  </div>
</template>


<script>
export default {
	props: [ 'numberArray' ],
	methods: {
		
	}
}
</script>