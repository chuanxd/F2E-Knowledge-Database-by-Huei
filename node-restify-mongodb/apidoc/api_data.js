define({ api: [
  {
    "type": "get",
    "url": "/kitty",
    "title": "Request Kitty information",
    "name": "GetKitty",
    "group": "Kitty",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>name of the kitty</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "age",
            "optional": false,
            "description": "<p>the kitty&#39;s age</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"name\": \"Hello Kitty\",\n     \"age\": 12\n   }]\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js"
  }
] });