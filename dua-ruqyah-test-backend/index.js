const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

// middleware area
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("dua_main.sqlite");

// All Category
app.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Sub Category
app.get("/sub-category/:catId", (req, res) => {
  const catId = req.params.catId;
  const sql = "SELECT * FROM sub_category WHERE cat_id = ?";

  db.all(sql, [catId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Sub Sub Category
app.get("/dua-subcategory/:catId", (req, res) => {
  const catId = req.params.catId;
  const sql =
    "SELECT id, cat_id, subcat_id, dua_id, dua_name_bn, dua_name_en FROM dua WHERE cat_id = ? AND dua_name_en NOT NULL";

  db.all(sql, [catId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Dua
app.get("/dua/:catId", (req, res) => {
  const catId = req.params.catId;

  const sql =
    "SELECT * FROM dua d LEFT JOIN sub_category sc ON d.subcat_id = sc.subcat_id WHERE sc.cat_id = ? AND dua_name_en NOT NULL";

  db.all(sql, [catId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Grouping data by subcategories
    const subcategories = {};
    rows.forEach((row) => {
      if (!subcategories[row.subcat_id]) {
        subcategories[row.subcat_id] = {
          id: row.subcat_id,
          subcat_id: row.subcat_id,
          subcat_name_bn: row.subcat_name_bn,
          subcat_name_en: row.subcat_name_en,
          no_of_dua: row.no_of_dua,
          duas: [],
        };
      }
      if (row.dua_id) {
        subcategories[row.subcat_id].duas.push({
          dua_id: row.dua_id,
          dua_name_bn: row.dua_name_bn,
          dua_name_en: row.dua_name_en,
          top_bn: row.top_bn,
          top_en: row.top_en,
          dua_arabic: row.dua_arabic,
          dua_indopak: row.dua_indopak,
          clean_arabic: row.clean_arabic,
          transliteration_bn: row.transliteration_bn,
          transliteration_en: row.transliteration_en,
          translation_bn: row.translation_bn,
          translation_en: row.translation_en,
          bottom_bn: row.bottom_bn,
          bottom_en: row.bottom_en,
          refference_bn: row.refference_bn,
          refference_en: row.refference_en,
          audio: row.audio,
        });
      }
    });

    res.json(Object.values(subcategories));
  });
});

// Route to get all data
app.get("/duas", (req, res) => {
  const sql = "SELECT * FROM dua";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
