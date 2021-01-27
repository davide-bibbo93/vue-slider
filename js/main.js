// Ricreare lo slider già fatto in jquery con Vue.js.
new Vue({
  el: "#app",
  data: {
    photoIndex: 0,
    keyCode: '',
    photos: [
      "img/img1.jpg",
      "img/img2.jpg",
      "img/img3.jpg",
      "img/img4.jpg"
    ],
  },
  methods: {
    nextPhoto: function () {
      this.photoIndex += 1;
      // se indice dell'immagine è maggiore dell'indice massimo dell'array photos(3), allora indice torna a 0,
      // altrimenti si somma +1
      if(this.photoIndex > (this.photos.length - 1)){
        this.photoIndex = 0;
      }
    },
    prevPhoto: function () {
      this.photoIndex -= 1;
      // se indice dell'immagine è minore di 0, l'indice ritorna al valore massimo dell'array photos(3),
      // altrimenti si sottrae di -1
      if(this.photoIndex < (0)){
        this.photoIndex = this.photos.length - 1;
      }
    },
    setCircle: function (index) {
      this.photoIndex = index;
    },
  }
});
Vue.config.devtools = true;
