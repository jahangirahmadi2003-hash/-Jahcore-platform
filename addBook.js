import { ref, set } from "firebase/database";
import { db } from "./firebase";

// ساخت اولین کتاب
set(ref(db, "books/1"), {
  title: "First Book",
  author: "JAHCORE",
  price: 0,
  type: "free",
  createdAt: Date.now()
});
