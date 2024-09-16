<template>
  <table class="table table-sm table-striped">
    <thead>
      <tr>
        <td colspan="2">
          <input
            type="text"
            class="form-control"
            placeholder="例:Python"
            data-hotkey="/"
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
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.release_date }}</td>
        <td>
          <a
            :href="book.book_url.toString()"
            target="_blank"
            rel="noopener noreferrer"
            >{{ book.book_title }}</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { install, uninstall } from "@github/hotkey";
import { Book } from '../lib/interface';

export default {
  name: "BooksItem",
  props: ["child_menu_id", "child_active_menu"],
  data() {
    return {
      books: [] as Book[],
      book_keywords: [] as string[],
      search_string: "" as string,
    };
  },
  methods: {
    setKeyWords: function () {
      let self = this;
      axios
        .get(self.child_active_menu[0].menu_keyword_url)
        .then(function (response) {
          self.book_keywords = response.data;
        })
        .catch((response) => console.log(response));
    },
    setBooks: function (val: string) {
      axios
        .get(this.child_active_menu[0].menu_data_url)
        .then((response: AxiosResponse<Book[]>) => {
          const processed = response.data.slice().reverse(); // keyの降順
          if (val.length === 0) {
            this.books = processed;
          } else {
            this.books = processed.filter(
              (book) =>
                [book.book_title, book.book_publisher, book.release_date]
                  .join(" ")
                  .toLowerCase()
                  .includes(val.toLowerCase())
            );
          }
        })
        .catch((e: AxiosError<{ error: string }>) => console.log(e.message));
    },
  },
  mounted: function () {
    let self = this;
    setTimeout(function () {
      // app.createdより後に実行したいためsetTimeoutしている
      // いい方法がみつかり次第きりかえる
      self.setKeyWords();
      self.setBooks("");
    }, 500);
    const items = document.querySelectorAll<HTMLInputElement>("[data-hotkey]");
    items.forEach((el: HTMLInputElement) => {
      install(el);
    });
  },
  onBeforeUnmount: function () {
    const items = document.querySelectorAll<HTMLInputElement>("[data-hotkey]");
    items.forEach((el: HTMLInputElement) => {
      uninstall(el);
    });
  },
  computed: {
    searchString: {
      get(): string {
        return this.search_string;
      },
      set(value: string) {
        this.search_string = value;
      },
    },
  },
  watch: {
    search_string(val) {
      this.setBooks(val);
    },
    child_menu_id() {
      this.setKeyWords();
      this.setBooks("");
    },
  },
};
</script>
