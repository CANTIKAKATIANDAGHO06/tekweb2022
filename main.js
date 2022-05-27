Vue.createApp({
  data() {
      return {
        content : {
          nama : "Cantika Juandy Putri Katiandagho",
          deskripsi : "Mahasiswa Universitas Ahmad Dahlan, Program Studi Sistem Informasi, Fakultas Sains dan Teknelogi Terapan."
        },
          articles: [],
          article: null,
      };
  },
  methods: {
      getArticles() {
          axios
              .get(
                  "https://my-json-server.typicode.com/CANTIKAKATIANDAGHO06/tekweb2022/article"
              )
              .then((res) => {
                  this.articles = res.data;
              })
              .catch((error) => {
                  console.log(error);
              });
      },
      getMarkdown() {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const articles = urlParams.get('Article');
          var converter = new showdown.Converter();
          console.log(articles);
          axios
              .get(
                  src = "https://raw.githubusercontent.com/CANTIKAKATIANDAGHO06/tekweb2022/new/article/" + articles
              )
              .then((res) => {
                  var html = converter.makeHtml(res.data);
                  this.article = html;
                  console.log(html);
              })
              .catch((error) => {
                  console.log(error);
              });
      }
  },

  beforeMount() {
          this.getArticles(),
          this.getMarkdown()
  }
}).mount("#app");
  
  
  
