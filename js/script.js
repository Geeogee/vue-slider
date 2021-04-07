function initVue() {

    new Vue({

        el: "#app",

        data: {

            "test" : "Hello world!"
        },

        methods: {

            next: function() {

                console.log("Next")
            },

            prev: function() {

                console.log("Prev")
            }
        }
    })
}

function init() {

  initVue();
}

document.addEventListener("DOMContentLoaded", init);