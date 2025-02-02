let books = [
  {
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    likes: 2000,
    liked: true,
    price: 17.95,
    publishedYear: 1937,
    genre: "Self-Help",
    comments: [
      {
        name: "SuccessSeeker",
        comment:
          "A timeless classic that provides practical steps to achieve personal and financial success.",
      },
      {
        name: "WealthBuilder",
        comment:
          "The principles in this book have transformed my approach to achieving goals.",
      },
    ],
  },
  {
    name: "Psychology of Money",
    author: "Morgan Housel",
    likes: 1800,
    liked: false,
    price: 16.5,
    publishedYear: 2020,
    genre: "Finance",
    comments: [
      {
        name: "FinancialGuru",
        comment:
          "An insightful look at how we think about money and how it influences our lives.",
      },
      {
        name: "Investor123",
        comment:
          "A must-read for anyone looking to make smarter financial decisions.",
      },
    ],
  },
  {
    name: "Eloquent JavaScript, 3rd Edition",
    author: "Marijn Haverbeke",
    likes: 1200,
    liked: true,
    price: 25.0,
    publishedYear: 2018,
    genre: "Programming",
    comments: [
      {
        name: "CodeMaster",
        comment:
          "The perfect book for learning JavaScript, filled with useful examples.",
      },
      {
        name: "WebDevPro",
        comment: "A comprehensive guide to mastering JavaScript.",
      },
    ],
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    likes: 2500,
    liked: true,
    price: 18.0,
    publishedYear: 2018,
    genre: "Self-Help",
    comments: [
      {
        name: "HabitBuilder",
        comment:
          "A game-changer for personal development. Clear and actionable advice.",
      },
      {
        name: "DailyAchiever",
        comment:
          "I implemented the habits from this book, and it changed my life!",
      },
    ],
  },
  {
    name: "The Psychology of Selling",
    author: "Brian Tracy",
    likes: 1500,
    liked: false,
    price: 19.95,
    publishedYear: 2006,
    genre: "Sales",
    comments: [
      {
        name: "SalesMaster",
        comment:
          "A powerful guide to understanding customers and improving sales.",
      },
      {
        name: "BusinessPro",
        comment: "Tracy’s insights are invaluable for anyone in sales.",
      },
    ],
  },
];

console.log(
  books.filter((element) => {
    return element["liked" == true];
  })
);
