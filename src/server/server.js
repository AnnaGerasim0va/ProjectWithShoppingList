const express = require("express");
const app = express();

const LIST_FOR_B_DAY = {
  name: "На день рождения",
  date: {
    day: "12",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Свечи",
      description: {},
      isDone: false
    },
    {
      name: "Шарики",
      description: {},
      isDone: false
    },
    {
      name: "Конфеты",
      description: {},
      isDone: false
    },
    {
      name: "Лента",
      description: {},
      isDone: false
    },
    {
      name: "Колпаки",
      description: {},
      isDone: false
    },
    {
      name: "Конфетти",
      description: {},
      isDone: false
    }
  ]
};

const LIST_FOR_WEEK = {
  name: "На неделю",
  date: {
    day: "09",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Картофель",
      description: {},
      isDone: false
    },
    {
      name: "Помидоры",
      description: {},
      isDone: false
    },
    {
      name: "Огурцы",
      description: {},
      isDone: false
    },
    {
      name: "Яблоки",
      description: {},
      isDone: false
    },
    {
      name: "Мясо",
      description: {},
      isDone: false
    },
    {
      name: "Хлеб",
      description: {},
      isDone: false
    },
    {
      name: "Фасоль",
      description: {},
      isDone: false
    },
    {
      name: "Зелень",
      description: {},
      isDone: false
    }
  ]
};

const LIST_FOR_CHILDREN = {
  name: "Детям",
  date: {
    day: "18",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Джинсы",
      description: {},
      isDone: false
    },
    {
      name: "Кроссовки",
      description: {},
      isDone: false
    },
    {
      name: "Футболка",
      description: {},
      isDone: false
    },
    {
      name: "Толстовка",
      description: {},
      isDone: false
    }
  ]
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3055"); // update to match the domain you will make the request from
  next();
});

app.get("/getLists", function(req, res) {
  res.json([LIST_FOR_B_DAY, LIST_FOR_CHILDREN, LIST_FOR_WEEK]);
});

app.listen(3077, function() {
  console.log("App listening on port 3077!");
});
