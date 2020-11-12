<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <td colspan="2">
          <input
            type="text"
            class="form-control"
            placeholder="例:Python"
            v-model="searchString"
          />
        </td>
      </tr>
      <tr>
        <th scope="col">発売日</th>
        <th scope="col">タイトル</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="book in books">
        <tr :key="book.id">
          <td>{{ book.release_date }}<br />{{ book.book_publisher }}</td>
          <td>
            <a :href="book.book_url">{{ book.book_title }}</a>
            <br />
            <template v-for="word in book.keyword_master">
              <template v-if="word.icon.length !== 0">
                <i :key="word.id" :class="word.icon"> </i>
              </template>
              <template v-else>
                <span :key="word.id" :class="word.id">
                  ・{{ word.display_name }} &nbsp;
                </span>
              </template>
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  props: ["child_page"],
  data() {
    return {
      books: [],
      book_keywords: [],
      menu: [],
      search_string: ""
    };
  },
  methods: {
    setKeyWords: function() {
      axios
        .get(
          "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/computer_book_keywords.json"
        )
        .then(response => (this.book_keywords = response.data))
        .catch(response => console.log(response));
    },
    setBooks: function(val) {
      axios
        .get(
          "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/computer_books.json"
        )
        .then(response => {
          let processed = response.data;
          processed.forEach(book => {
            let master = [];
            book.keywords.forEach(word => {
              const found = this.book_keywords.filter(x => x.id === word);
              if (found.length > 0) {
                master.push(found[0]);
              }
            });
            book.keyword_master = master;
          });
          if (val.length === 0) {
            this.books = processed;
          } else {
            this.books = processed.filter(
              book =>
                (book.book_title + book.book_publisher + book.release_date)
                  .toLowerCase()
                  .indexOf(val.toLowerCase()) > 0
            );
          }
        })
        .catch(response => console.log(response));
    }
  },
  mounted: function() {
    this.setKeyWords();
    this.setBooks("");
  },
  computed: {
    searchString: {
      get() {
        return this.search_string;
      },
      set(value) {
        this.search_string = value;
      }
    }
  },
  watch: {
    search_string(val) {
      this.setKeyWords();
      this.setBooks(val);
    }
  }
};
</script>

<style>
@import url("../assets/css/computer_books.css");
</style>
