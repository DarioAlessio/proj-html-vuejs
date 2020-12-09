

var app = new Vue({
  el: "#app",
  data: {
    // header
    imageLogo: "img/dark-logo.png",
    active: "home",

     // footer
    address: "382 NE 191 St #87394 Miami, FL 33179-3899",
    telephone: "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
    email: "support@maxcoach.com",
    infoSocial:[
      {
        name: "facebook",
        icon: "fa fa-facebook",
        href: "#"
      },
      {
        name: "twitter",
        icon: "fa fa-twitter",
        href: "#"
      },
      {
        name: "instagram",
        icon: "fa fa-instagram",
        href: "#"
      },
      {
        name: "linkedin",
        icon: "fa fa-linkedin",
        href: "#"
      }

    ],
    explore: [
     {
       link: "Start here",
       href: "#"
     },
     {
       link: "Blog",
       href: "#"
     },
     {
       link: "About us",
       href: "#"
     },
     {
       link: "Success story",
       href: "#"
     },
     {
       link: "Courses",
       href: "#"
     },
     {
       link: "Contact us",
       href: "#"
     }
   ],
   information: [
      {
        link: "Membership",
        href: "#"
      },
      {
        link: "Purchase guide",
        href: "#"
      },
      {
        link: "Privacy policy",
        href: "#"
      },
      {
        link: "Terms of services",
        href: "#"
      }
    ]
  },
  methods: {
		makeActive: function(item){
			this.active = item;
		}
	}
});
