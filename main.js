new Vue({

	el: '#app',

	data: {

		introDisplay: true,

		permission: false,

		pwd: '',

		password: "lilyne"

	},

	methods: {

		check() {
			if ( this.password == this.pwd ) {
				this.introDisplay = false;
				this.permission = true;
			}
		}

	}

})