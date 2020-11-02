<template>
  <table class="table table-sm">
    <thead>
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
  data() {
    return {
      books: [],
      book_keywords: []
    };
  },
  mounted: function() {
    axios
      .get("./assets/json/computer_book_keywords.json")
      .then(response => (this.book_keywords = response.data))
      .catch(response => console.log(response));
    axios
      .get("./assets/json/computer_books.json")
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
  }
};
</script>

<style>
@import url("./assets/css/computer_books.css");
</style>
