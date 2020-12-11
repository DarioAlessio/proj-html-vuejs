var header = new Vue({
  el: "#header",
  data:{
    // header
    imageLogo: "img/dark-logo.png",
    active: false,
    navs: [
      {
        name:"home",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]
      },
      {
        name:"pages",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]

      },
      {
        name:"courses",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]

      },
      {
        name:"features",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]

      },
      {
        name:"blog",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]
      },
      {
        name:"shop",
        lists:[
          {
            element:"one",
            href: "#"
          },
          {
            element:"two",
            href: "#"
          }
        ]

      }

    ]

  }

});
