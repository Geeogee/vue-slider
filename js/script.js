function initVue() {

    new Vue({

        el: "#app",

        data: {

            "test" : "Hello world!",
            "images" : ["img/rathalos.webp", "img/rajang.webp", "img/zinogre.webp", "img/fatalis.webp"],    
            "active": 0,
            "max" : 3,
            "min": 0
        },

        methods: {

            next: function() {

                if (this.active >= this.max) {
                    this.active = 0
                } else {
                    this.active++
                }
            },

            prev: function() {

                if (this.active <= this.min) {
                    this.active = this.max
                } else {
                    this.active--
                }
            }
        }
    })
}

function init() {

  initVue();
}

document.addEventListener("DOMContentLoaded", init);