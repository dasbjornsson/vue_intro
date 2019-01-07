var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    results: {}
  },
  // methods: {
    // fetchData: function () {
      // axios.get('https://api.github.com/users/dasbjornsson/repos').then(response => {
      // this.results = response.data
    // })
    // }
  // },
  mounted() {
    axios.get('https://api.github.com/users/dasbjornsson/repos').then(response => {
      this.results = response.data
    })
  }
})