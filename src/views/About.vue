<template>
  <v-app>
    <v-row>
      <v-col cols="12" class="about">
        <h1>This is an about page</h1>

        <even-odd :numberArray="numberArray">
          <template v-slot:evenOdd="{ num }">
            <h2>{{ num }}</h2>
            <span v-if="isEven(num)">is even</span>
            <span v-else>is odd</span>
          </template>
        </even-odd>
      </v-col>
    </v-row>
    <v-sparkline/>
    <v-row>
      <my-menu :showMenu="showMenu" :items="items"></my-menu>
    </v-row>
  </v-app>
</template>

<script>
import MyMenu from '../components/MyMenu.vue';
import EvenOdd from "./EvenOdd.vue";
export default {
  components: {
    EvenOdd,
    MyMenu
  },
  data() {
    return {
      numberArray: [10, 11, 12, 13, 14, 15, 16, 17],
       showMenu: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    isEven: num => num % 2
  }
};
</script>
