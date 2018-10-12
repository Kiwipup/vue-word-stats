var app = new Vue({
  el: '#app',

  data: {
    textInput: "",
    pcount: 0,
    scount: 0,
    wcount: 0,
    ccount: 0,
    frequentchar: "",
    longestword: "",
    w_array: [],
    c_array: []

  },

  methods: {

      inputMagic: function () {

          for (let i = 0; i < this.textInput.length; i++){
            if (this.textInput[i] == "!" || this.textInput[i] == "." || this.textInput[i] == "?"){
                this.scount++;
            }
          }

        this.w_array = this.textInput.split(" ");
        this.wcount = this.w_array.length;
        this.c_array = this.textInput.split("");
        this.ccount = this.c_array.length;
        this.pcount = this.textInput.replace(/\n$/gm, '').split(/\n/).length;


      }

  }
})
