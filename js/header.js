var header = new Vue({
  el: "#header",
  data:{
    // header
    imageLogo: "img/dark-logo.png",
    navs: [
      {
        name:"Home",
        open:"true",
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
        name:"Pages",
        open:"false",
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
        name:"Courses",
        open:"false",
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
        name:"Features",
        open:"false",
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
        name:"Blog",
        open:"false",
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
        name:"Shop",
        open:"false",
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
