var header = new Vue({
  el: "#header",
  data:{
    // header
    imageLogo: "img/dark-logo.png",
    open: false,
    navs: [
      {
        name:"Home",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]
      },
      {
        name:"Pages",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]

      },
      {
        name:"Courses",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]

      },
      {
        name:"Features",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]

      },
      {
        name:"Blog",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]
      },
      {
        name:"Shop",
        lists:[
          {
            list:"one",
            href: "#"
          },
          {
            list:"one",
            href: "#"
          },
          {
            list:"two",
            href: "#"
          }
        ]

      }

    ]

  },
  methods: {
  apri: function(index) {
    this.open = index;
  },

  chiudi: function(index) {
    this.open = false;
  }
}


});
