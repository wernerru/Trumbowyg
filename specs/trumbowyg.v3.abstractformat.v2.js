const content = [
  {
    "block": "h1",
    "content": [
      {"text": "Trumbowyg v3"}
    ]
  },
  {
    "block": "p",
    "content": [
      {"text": "Lorem "},
      {"text": "ipsum ", "attributes": {"del": true}},
      {"text": "d", "attributes": {"del": true, "strong": true}},
      {"text": "o", "attributes": {"del": true, "strong": true, "emphasis": true}},
      {"text": "lor", "attributes": {"del": true, "strong": true}},
      {"text": " "},
      {"text": "sit", "attributes": {"emphasis": true}},
      {"text": " amet"},
    ]
  },
  {
    "block": "p",
    "content": [
      {"text": "And "},
      {"text": "blah ", "attributes": {"strong": true}},
      {"text": "or", "attributes": {"strong": true, "emphasis": true}},
      {"text": " nah."},
    ]
  },
  {
    "block": "div",
    "content": [
      {"text": "Salut"},
      {"image": "img.svg", "attributes": {"alt": "Some JavaScript logo", "width": "20px"}}
    ]
  },
  {
    "block": "ul",
    "content": [
      {
        "block": "li",
        "content": [
          {"text": "Item 1"}
        ]
      },
      {
        "block": "li",
        "content": [
          {"text": "Second item"}
        ]
      },
      {
        "block": "li",
        "content": [
          {"text": "List in list"},
          {
            "block": "ul",
            "content": [
              {
                "block": "li",
                "content": [
                  {"text": "Third li"},
                  {"text": "Fourth Item"}
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "block": "table",
    "content": [
      {
        "block": "thead",
        "content": [
          {
            "block": "th",

          }
        ]
      }
    ]
  }
]

// https://github.com/ianstormtaylor/slate/blob/master/examples/markdown-shortcuts/value.json

// https://github.com/andrejewski/himalaya#example-inputoutput
