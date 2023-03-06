export interface Menu {
  id: number;
  menu_title_head: string;
  menu_title: string;
  menu_data_url: string;
  menu_keyword_url: string;
  menu_top_url: string;
}

export interface Book {
  "id": number;
  "release_date": Date;
  "book_title": string;
  "book_url": URL;
  "book_publisher": String;
  "isbn": String;
  "keywords": Array<String>;
}
