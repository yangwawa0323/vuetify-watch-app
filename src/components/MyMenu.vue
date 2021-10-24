<template>
  <v-app>
    <v-menu v-model="expandMenu" absolute offset-y style="max-width: 600px">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          class="portrait"
          img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
          height="300"
          width="600"
          v-bind="attrs"
          v-on="on"
        ></v-card>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="debugMenuItemClick(item, index)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app>
</template>

<script>
export default {
  name: "MyMenu",
  props: 
    {
      showMenu: {
        type: Boolean,
        required: false,
		default: false,
      },

	  items: Array,

    }
  ,
  data: () => {
    return {
		expandMenu : false
	};
  },
  methods:{
	  debugMenuItemClick(item, index){
		  console.log(item, index)
		  console.log(this.debugComputedProperty())
	  },

	  debugComputedProperty(){
		  var _a = {};
		  var osPrefix = 'os_';
		  var support = ( 
		  _a[osPrefix + 'Windows']= this.isSupported('Windows'),
		  _a[osPrefix + 'iOS'] = this.isSupported('iOS'),
		  _a[osPrefix + 'Andriod'] = this.isSupported('Andriod'),
		  _a);
		  return support
	  },
	  isSupported(os){
		  return Math.random() >= 0.5
	  }
  },
  watch : {
	  showMenu(newVal) {
		  this.expandMenu  = newVal
	  }
  }
};
</script>
