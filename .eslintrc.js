/* eslint-disable */

module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		// 'plugin:vue/vue3-recommended',

		// our vue version is 2.6.11
		'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		// override/add rules settings here, such as:
		 'vue/no-unused-vars': 'warn'
	
	}
}