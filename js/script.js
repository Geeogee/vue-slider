function initVue() {

    new Vue({

        el: "#app",

        data: {

            "test" : "Hello world!",
            "images" : ["img/rathalos.webp", "img/rajang.webp", "img/zinogre.webp", "img/fatalis.webp"],    
            "active": 0,
            "timer" : ""
        },

        methods: {

            next: function() {

                
                const max = this.images.length - 1;

                if (this.active == max) {
                    this.active = 0
                } else {
                    this.active++
                }

            },

            prev: function() {

                const max = this.images.length - 1;

                if (this.active == 0) {
                    this.active = max
                } else {
                    this.active--
                }
            },

            imageJump: function(index) {

                this.active = index;
            },

            stopSlideshow: function() {

                clearInterval(this.timer);
            },

            startSlideshow: function() {

                this.timer = setInterval(this.next, 3000);
            }

        },

        mounted: function() {

           this.timer = setInterval(this.next, 3000);
        }
    })
}

function init() {

  initVue();
}

document.addEventListener("DOMContentLoaded", init);