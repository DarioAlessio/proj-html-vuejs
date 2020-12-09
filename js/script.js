

var app = new Vue({
  el: "#app",
  data: {
    imageLogo: "img/dark-logo.png",
    active: "home" // header
  },
  methods: {
		makeActive: function(item){
			this.active = item;
		}
	}
});
