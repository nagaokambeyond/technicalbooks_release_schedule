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
            <span
              v-for="word in book.keyword_master"
              :key="word.id"
              :class="word.id"
            >
              ・{{ word.display_name }} &nbsp;
            </span>
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
  mounted: function() {
    axios
      .get(
        "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/computer_book_keywords.json"
      )
      .then(response => (this.book_keywords = response.data))
      .catch(response => console.log(response));
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
        this.books = processed;
      })
      .catch(response => console.log(response));
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
      axios
        .get(
          "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/computer_book_keywords.json"
        )
        .then(response => (this.book_keywords = response.data))
        .catch(response => console.log(response));
      axios
        .get(
          "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/computer_books.json"
        )
        .then(response => {
          var processed = response.data;
          if (val.length !== 0) {
            processed = response.data.filter(
              book =>
                (
                  book.book_title.toLowerCase() +
                  book.book_publisher.toLowerCase() +
                  book.release_date
                ).indexOf(val.toLowerCase()) > 0
            );
          }

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
          this.books = processed;
        })
        .catch(response => console.log(response));
    }
  }
};
</script>

<style>
@import url("../assets/css/computer_books.css");
</style>
