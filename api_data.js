define({ "api": [
  {
    "type": "post",
    "url": "/jurisdictions",
    "title": "Create Jurisdictions",
    "group": "Jurisdiction",
    "name": "CreateJurisdiction",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n {\n        \"code\": \"TSM\",\n        \"name\": \"Test\",\n        \"phone\": \"255714999886\",\n        \"email\": \"N/A\",\n        \"domain\": \"test.example.org\",\n        \"about\": \"Test Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#ECB7F7\",\n        \"_id\": \"592029e6e8dd8e00048c1851\",\n        \"createdAt\": \"2017-05-20T11:35:02.263Z\",\n        \"updatedAt\": \"2017-06-16T12:04:37.645Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1851\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/jurisdictions/:id",
    "title": "Delete Jurisdiction",
    "group": "Jurisdiction",
    "name": "DeleteJurisdiction",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique jurisdiction Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n        \"code\": \"TSM\",\n        \"name\": \"Test\",\n        \"phone\": \"255714999886\",\n        \"email\": \"N/A\",\n        \"domain\": \"test.example.org\",\n        \"about\": \"Test Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#ECB7F7\",\n        \"_id\": \"592029e6e8dd8e00048c1851\",\n        \"createdAt\": \"2017-05-20T11:35:02.263Z\",\n        \"updatedAt\": \"2017-06-16T12:04:37.645Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1851\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/jurisdictions/:id",
    "title": "Get Jurisdiction",
    "group": "Jurisdiction",
    "name": "GetJurisdiction",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique jurisdiction Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n        \"code\": \"TSM\",\n        \"name\": \"Test\",\n        \"phone\": \"255714999886\",\n        \"email\": \"N/A\",\n        \"domain\": \"test.example.org\",\n        \"about\": \"Test Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#ECB7F7\",\n        \"_id\": \"592029e6e8dd8e00048c1851\",\n        \"createdAt\": \"2017-05-20T11:35:02.263Z\",\n        \"updatedAt\": \"2017-06-16T12:04:37.645Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1851\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/jurisdictions",
    "title": "Get Jurisdictions",
    "group": "Jurisdiction",
    "name": "GetJurisdictions",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/jurisdictions",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Jurisdiction results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n \"jurisdictions\": [\n    {\n        \"code\": \"H\",\n        \"name\": \"HQ\",\n        \"phone\": \"255714999888\",\n        \"email\": \"N/A\",\n        \"domain\": \"dawasco.org\",\n        \"about\": \"Main office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#143B7F\",\n        \"_id\": \"592029e5e8dd8e00048c184b\",\n        \"createdAt\": \"2017-05-20T11:35:02.007Z\",\n        \"updatedAt\": \"2017-06-16T12:04:10.893Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n    },\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"code\": \"I\",\n        \"name\": \"Ilala\",\n        \"phone\": \"255714999887\",\n        \"email\": \"N/A\",\n        \"domain\": \"ilala.dawasco.org\",\n        \"about\": \"Ilala Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#6EDD9B\",\n        \"_id\": \"592029e6e8dd8e00048c1850\",\n        \"createdAt\": \"2017-05-20T11:35:02.241Z\",\n       \"updatedAt\": \"2017-06-16T12:04:24.716Z\",\n         \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1850\"\n    }\n   ],\n   \"pages\": 1,\n   \"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/jurisdictions/:id",
    "title": "Update(PATCH)  Jurisdiction",
    "group": "Jurisdiction",
    "name": "PatchJurisdiction",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique jurisdiction Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n        \"code\": \"TSM\",\n        \"name\": \"Test\",\n        \"phone\": \"255714999886\",\n        \"email\": \"N/A\",\n        \"domain\": \"test.example.org\",\n        \"about\": \"Test Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#ECB7F7\",\n        \"_id\": \"592029e6e8dd8e00048c1851\",\n        \"createdAt\": \"2017-05-20T11:35:02.263Z\",\n        \"updatedAt\": \"2017-06-16T12:04:37.645Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1851\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/jurisdictions/:id",
    "title": "Update(PUT) Jurisdiction",
    "group": "Jurisdiction",
    "name": "PutJurisdiction",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique jurisdiction Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>Top jurisdiction under which this jurisdiction derived.  This is applicable where a large jurisdiction delegates its power to its division(s). If not set the jurisdiction will be treated as a top jurisdiction and will be affected by any logics implemented  accordingly.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Human readable coded name of the jurisdiction. Used in deriving service request code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact jurisdiction. Used when a party want to send an SMS or call the jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Primary email address used to contact jurisdiction direct. Used when a party want to send direct mail to specific jurisdiction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Unique reserved domain name of the jurisdiction e.g example.go.tz. It used as jurisdiction_id in open311 api specification and whenever applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>A brief summary about jurisdiction if available i.e additional details that clarify what a jurisdiction do.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable physical address of jurisdiction office. Used when a party what to physical go or visit the jurisdiction office.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Jurisdiction location coordinations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate jurisdiction visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Jurisdiction Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Jurisdiction creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Jurisdiction last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Jurisdiction longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Jurisdiction latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Jurisdiction URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n        \"code\": \"TSM\",\n        \"name\": \"Test\",\n        \"phone\": \"255714999886\",\n        \"email\": \"N/A\",\n        \"domain\": \"test.example.org\",\n        \"about\": \"Test Area Office for Dar es salaam Water Supply Company(DAWASCO)\",\n        \"address\": \"N/A\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                0,\n                0\n            ]\n        },\n        \"color\": \"#ECB7F7\",\n        \"_id\": \"592029e6e8dd8e00048c1851\",\n        \"createdAt\": \"2017-05-20T11:35:02.263Z\",\n        \"updatedAt\": \"2017-06-16T12:04:37.645Z\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1851\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routers/jurisdiction_router.js",
    "groupTitle": "Jurisdiction",
    "groupDescription": "<p>An entity (e.g minicipal) responsible for addressing service request(issue).</p> <p>It may be a self managed entity or division within another entity(jurisdiction) in case there is hierarchy.</p>",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/jurisdictions/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/priorities/:id",
    "title": "Delete Priority",
    "name": "DeletePriority",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Priority unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Example\",\n   \"weight\": 0,\n   \"color\": \"#0D47A1\",\n   \"_id\": \"597cd4aa3118df0004bc3f87\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/priorities/597cd4aa3118df0004bc3f87\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/priorities",
    "title": "Get all priorities",
    "name": "GetPriorities",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/priorities",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of priority results in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"priorities\": [\n        {\n          \"name\": \"Low\",\n          \"weight\": 0,\n          \"color\": \"#1B5E20\",\n          \"_id\": \"592029e5e8dd8e00048c1816\",\n          \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.586Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n      },\n       {\n           \"name\": \"Normal\",\n           \"weight\": 5,\n           \"color\": \"#4CAF50\",\n           \"_id\": \"592029e5e8dd8e00048c1817\",\n           \"createdAt\": \"2017-05-20T11:35:01.601Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.601Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1817\"\n       },\n       {\n          \"name\": \"Medium\",\n          \"weight\": 10,\n          \"color\": \"#FFC107\",\n          \"_id\": \"592029e5e8dd8e00048c1818\",\n          \"createdAt\": \"2017-05-20T11:35:01.615Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.615Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1818\"\n      },\n      {\n          \"name\": \"High\",\n          \"weight\": 15,\n          \"color\": \"#FF9800\",\n          \"_id\": \"592029e5e8dd8e00048c1819\",\n          \"createdAt\": \"2017-05-20T11:35:01.625Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.625Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1819\"\n      },\n      {\n          \"name\": \"Critical\",\n          \"weight\": 20,\n          \"color\": \"#F44336\",\n          \"_id\": \"592029e5e8dd8e00048c181a\",\n          \"createdAt\": \"2017-05-20T11:35:01.636Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.636Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c181a\"\n      }\n   ],\n   \"pages\": 1,\n   \"count\": 5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities"
      }
    ]
  },
  {
    "type": "get",
    "url": "/priorities/:id",
    "title": "Request Priority information",
    "name": "GetPriority",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Priority unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Low\",\n   \"weight\": 0,\n   \"color\": \"#1B5E20\",\n   \"_id\": \"592029e5e8dd8e00048c1816\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/priorities/:id",
    "title": "Update Priority information",
    "name": "PatchPriority",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Priority unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Low\",\n   \"weight\": 0,\n   \"color\": \"#1B5E21\",\n   \"_id\": \"592029e5e8dd8e00048c1816\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/priorities",
    "title": "Create a new priority",
    "name": "PostPriority",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n {\n     \"name\": \"Very High\",\n     \"weight\": 20,\n     \"color\": \"#0D47A1\",\n     \"_id\": \"592029e5e8dd8e00048c180d\",\n     \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n     \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n    \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c180d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities"
      }
    ]
  },
  {
    "type": "put",
    "url": "/priorities/:id",
    "title": "Update Priority information",
    "name": "PutPriority",
    "group": "Priority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Priority unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Human readable name of the priority e.g High, Low, Medium.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the priority to help in ordering service request(issue) based on priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request priority visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Priority Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Priority creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Priority updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Priority URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Low\",\n   \"weight\": 0,\n   \"color\": \"#1B5E21\",\n   \"_id\": \"592029e5e8dd8e00048c1816\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/priority_router.js",
    "groupTitle": "Priority",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/priorities/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/services/:id",
    "title": "Delete Service information",
    "name": "DeleteService",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"group\": {\n           \"code\": \"N\",\n           \"name\": \"Non Commercial\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c184d\",\n           \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n       },\n       \"code\": \"LW\",\n       \"name\": \"Lack of Water\",\n       \"description\": \"Lack of Water related service request(issue)\",\n       \"color\": \"#960F1E\",\n       \"_id\": \"592029e6e8dd8e00048c1852\",\n       \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/services/:id",
    "title": "Request Service information",
    "name": "GetService",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique service Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"group\": {\n           \"code\": \"N\",\n           \"name\": \"Non Commercial\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c184d\",\n           \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n       },\n       \"code\": \"LW\",\n       \"name\": \"Lack of Water\",\n       \"description\": \"Lack of Water related service request(issue)\",\n       \"color\": \"#960F1E\",\n       \"_id\": \"592029e6e8dd8e00048c1852\",\n       \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/services",
    "title": "Get all Services",
    "name": "GetServices",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/services",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"services\": [\n      {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"group\": {\n            \"code\": \"N\",\n            \"name\": \"Non Commercial\",\n            \"color\": \"#960F1E\",\n            \"_id\": \"592029e6e8dd8e00048c184d\",\n            \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n        },\n        \"code\": \"LW\",\n        \"name\": \"Lack of Water\",\n        \"description\": \"Lack of Water related service request(issue)\",\n        \"color\": \"#960F1E\",\n        \"_id\": \"592029e6e8dd8e00048c1852\",\n        \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n    },\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"group\": {\n            \"code\": \"N\",\n            \"name\": \"Non Commercial\",\n            \"color\": \"#960F1E\",\n            \"_id\": \"592029e6e8dd8e00048c184d\",\n            \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n        },\n        \"code\": \"LK\",\n        \"name\": \"Leakage\",\n        \"description\": \"Water Leakage related service request(issue)\",\n        \"color\": \"#D31DBB\",\n        \"_id\": \"592029e6e8dd8e00048c1853\",\n        \"createdAt\": \"2017-05-20T11:35:02.315Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.315Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1853\"\n    },\n   ],\n   \"pages\": 1,\n   \"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/servicegroups/:id",
    "title": "Delete specific service group information",
    "name": "DeleteServiceGroup",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Group  Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"code\": \"C\",\n       \"name\": \"Commercial\",\n       \"description\": \"Commercial related service request(issue)\",\n       \"color\": \"#06C947\",\n       \"_id\": \"592029e6e8dd8e00048c184c\",\n       \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/servicegroups/:id",
    "title": "Request Service Group information",
    "name": "GetServiceGroup",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Group  Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"code\": \"C\",\n       \"name\": \"Commercial\",\n       \"description\": \"Commercial related service request(issue)\",\n       \"color\": \"#06C947\",\n       \"_id\": \"592029e6e8dd8e00048c184c\",\n       \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/servicegroups",
    "title": "Get all ServiceGroups",
    "name": "GetServiceGroups",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/servicegroups",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service groups results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"servicegroups\": [\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"code\": \"C\",\n        \"name\": \"Commercial\",\n        \"description\": \"Commercial related service request(issue)\",\n        \"color\": \"#06C947\",\n        \"_id\": \"592029e6e8dd8e00048c184c\",\n        \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n    },\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"code\": \"N\",\n        \"name\": \"Non Commercial\",\n        \"description\": \"Non commercial related service request(issue)\",\n        \"color\": \"#960F1E\",\n        \"_id\": \"592029e6e8dd8e00048c184d\",\n        \"createdAt\": \"2017-05-20T11:35:02.054Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.054Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n    },\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"code\": \"O\",\n        \"name\": \"Other\",\n        \"description\": \"Other related service request(issue)\",\n        \"color\": \"#C8B1EF\",\n        \"_id\": \"592029e6e8dd8e00048c184e\",\n        \"createdAt\": \"2017-05-20T11:35:02.066Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.066Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184e\"\n    }\n ],\n \"pages\": 1,\n \"count\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/servicegroups/:id",
    "title": "Update specific service group information",
    "name": "PatchServiceGroup",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"code\": \"C\",\n       \"name\": \"Commercial\",\n       \"description\": \"Commercial related service request(issue)\",\n       \"color\": \"#06C947\",\n       \"_id\": \"592029e6e8dd8e00048c184c\",\n       \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/servicegroups",
    "title": "Create a new service group",
    "name": "PostServiceGroup",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"code\": \"C\",\n       \"name\": \"Commercial\",\n       \"description\": \"Commercial related service request(issue)\",\n       \"color\": \"#06C947\",\n       \"_id\": \"592029e6e8dd8e00048c184c\",\n       \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups"
      }
    ]
  },
  {
    "type": "put",
    "url": "/servicegroups/:id",
    "title": "Update specific service group information",
    "name": "PutServiceGroup",
    "group": "ServiceGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service group is applicable. If not available a service group is applicable to all  jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service group.Used in deriving code of the service request(issue) and internal jurisdiction usage i.e act as an issue identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service group e.g Sanitation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) eg. #363636 used to differentiate a service group visually from other service group.  If not provided it will randomly generated, but it is not guarantee its visual appeal.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Group Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service group creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service group last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service group URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"code\": \"C\",\n       \"name\": \"Commercial\",\n       \"description\": \"Commercial related service request(issue)\",\n       \"color\": \"#06C947\",\n       \"_id\": \"592029e6e8dd8e00048c184c\",\n       \"createdAt\": \"2017-05-20T11:35:02.033Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.033Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_group_router.js",
    "groupTitle": "ServiceGroup",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicegroups/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/services/:id",
    "title": "Update Service information",
    "name": "PatchService",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"group\": {\n           \"code\": \"N\",\n           \"name\": \"Non Commercial\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c184d\",\n           \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n       },\n       \"code\": \"LW\",\n       \"name\": \"Lack of Water\",\n       \"description\": \"Lack of Water related service request(issue)\",\n       \"color\": \"#960F1E\",\n       \"_id\": \"592029e6e8dd8e00048c1852\",\n       \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/services",
    "title": "Create a new Service",
    "name": "PostService",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"group\": {\n            \"code\": \"N\",\n            \"name\": \"Non Commercial\",\n            \"color\": \"#960F1E\",\n            \"_id\": \"592029e6e8dd8e00048c184d\",\n            \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n        },\n        \"code\": \"LW\",\n        \"name\": \"Lack of Water\",\n        \"description\": \"Lack of Water related service request(issue)\",\n        \"color\": \"#960F1E\",\n        \"_id\": \"592029e6e8dd8e00048c1852\",\n        \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n        \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n        \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services"
      }
    ]
  },
  {
    "type": "put",
    "url": "/services/:id",
    "title": "Update Service information",
    "name": "PutService",
    "group": "Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique service Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction under which a service (request type) is applicable.If not available a service is applicable to all jurisdictions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which a service belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique identifier of the service.Used in deriving code of the service request(issue) and internal usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A unique human readable name of the service (request type) e.g Water Leakage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service(request type)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color (hexadecimal format) used to differentiate service request type visually from other service</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Service Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Service URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of Service results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"group\": {\n           \"code\": \"N\",\n           \"name\": \"Non Commercial\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c184d\",\n           \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n       },\n       \"code\": \"LW\",\n       \"name\": \"Lack of Water\",\n       \"description\": \"Lack of Water related service request(issue)\",\n       \"color\": \"#960F1E\",\n       \"_id\": \"592029e6e8dd8e00048c1852\",\n       \"createdAt\": \"2017-05-20T11:35:02.299Z\",\n       \"updatedAt\": \"2017-05-20T11:35:02.299Z\",\n       \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_router.js",
    "groupTitle": "Service",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/services/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/servicerequests/:id",
    "title": "Delete Specific Service Request information",
    "name": "DeleteServiceRequest",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Request Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"service\": {\n           \"group\": {\n               \"code\": \"N\",\n               \"name\": \"Non Commercial\",\n               \"color\": \"#960F1E\",\n               \"_id\": \"592029e6e8dd8e00048c184d\",\n               \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n           },\n           \"code\": \"LW\",\n           \"name\": \"Lack of Water\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c1852\",\n           \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n       },\n       \"call\": {\n           \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"duration\": 0\n       },\n       \"reporter\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"email\": \"scala.lally@gmail.com\"\n       },\n       \"operator\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"_id\": \"592029e6e8dd8e00048c1856\",\n           \"permissions\": [],\n           \"email\": \"scala.lally@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n       },\n       \"assignee\": {\n           \"name\": \"Moses Kabungo\",\n           \"phone\": \"255753111039\",\n           \"_id\": \"592029e6e8dd8e00048c185f\",\n           \"permissions\": [],\n           \"email\": \"kbng.moses@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n       },\n       \"code\": \"HLW170001\",\n       \"description\": \"For three days now we dont have water\",\n       \"address\": \"Mikocheni\",\n       \"method\": \"Call\",\n       \"status\": {\n           \"name\": \"Open\",\n           \"weight\": -5,\n           \"color\": \"#0D47A1\",\n           \"_id\": \"592029e5e8dd8e00048c180d\",\n           \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n       },\n       \"priority\": {\n           \"name\": \"Low\",\n           \"weight\": 0,\n           \"color\": \"#1B5E29\",\n           \"_id\": \"592029e5e8dd8e00048c1816\",\n           \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n           \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n       },\n       \"attachments\": [],\n       \"ttr\": 0,\n       \"_id\": \"592029e6e8dd8e00048c1859\",\n       \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n       \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n       \"ttrSeconds\": 0,\n       \"ttrMinutes\": 0,\n       \"ttrHours\": 0,\n       \"longitude\": 0,\n       \"latitude\": 0,\n       \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/servicerequests/:id",
    "title": "Request Service Request information",
    "name": "GetServiceRequest",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Request  Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"service\": {\n           \"group\": {\n               \"code\": \"N\",\n               \"name\": \"Non Commercial\",\n               \"color\": \"#960F1E\",\n               \"_id\": \"592029e6e8dd8e00048c184d\",\n               \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n           },\n           \"code\": \"LW\",\n           \"name\": \"Lack of Water\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c1852\",\n           \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n       },\n       \"call\": {\n           \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"duration\": 0\n       },\n       \"reporter\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"email\": \"scala.lally@gmail.com\"\n       },\n       \"operator\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"_id\": \"592029e6e8dd8e00048c1856\",\n           \"permissions\": [],\n           \"email\": \"scala.lally@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n       },\n       \"assignee\": {\n           \"name\": \"Moses Kabungo\",\n           \"phone\": \"255753111039\",\n           \"_id\": \"592029e6e8dd8e00048c185f\",\n           \"permissions\": [],\n           \"email\": \"kbng.moses@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n       },\n       \"code\": \"HLW170001\",\n       \"description\": \"For three days now we dont have water\",\n       \"address\": \"Mikocheni\",\n       \"method\": \"Call\",\n       \"status\": {\n           \"name\": \"Open\",\n           \"weight\": -5,\n           \"color\": \"#0D47A1\",\n           \"_id\": \"592029e5e8dd8e00048c180d\",\n           \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n       },\n       \"priority\": {\n           \"name\": \"Low\",\n           \"weight\": 0,\n           \"color\": \"#1B5E29\",\n           \"_id\": \"592029e5e8dd8e00048c1816\",\n           \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n           \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n       },\n       \"attachments\": [],\n       \"ttr\": 0,\n       \"_id\": \"592029e6e8dd8e00048c1859\",\n       \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n       \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n       \"ttrSeconds\": 0,\n       \"ttrMinutes\": 0,\n       \"ttrHours\": 0,\n       \"longitude\": 0,\n       \"latitude\": 0,\n       \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/servicerequests",
    "title": "Get all ServiceRequests",
    "name": "GetServiceRequests",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/servicerequests",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"servicerequests\": [\n    {\n        \"jurisdiction\": {\n            \"code\": \"H\",\n            \"name\": \"HQ\",\n            \"phone\": \"255714999888\",\n            \"email\": \"N/A\",\n            \"domain\": \"dawasco.org\",\n            \"_id\": \"592029e5e8dd8e00048c184b\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n        },\n        \"service\": {\n            \"group\": {\n                \"code\": \"N\",\n                \"name\": \"Non Commercial\",\n                \"color\": \"#960F1E\",\n                \"_id\": \"592029e6e8dd8e00048c184d\",\n                \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n            },\n            \"code\": \"LW\",\n            \"name\": \"Lack of Water\",\n            \"color\": \"#960F1E\",\n            \"_id\": \"592029e6e8dd8e00048c1852\",\n            \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n        },\n        \"call\": {\n            \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n            \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n            \"duration\": 0\n        },\n        \"reporter\": {\n            \"name\": \"Juma John\",\n            \"phone\": \"255765952971\",\n            \"email\": \"scala.lally@gmail.com\"\n        },\n        \"operator\": {\n            \"name\": \"Juma John\",\n            \"phone\": \"255765952971\",\n            \"_id\": \"592029e6e8dd8e00048c1856\",\n            \"permissions\": [],\n            \"email\": \"scala.lally@gmail.com\",\n            \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n        },\n        \"assignee\": {\n            \"name\": \"Moses Kabungo\",\n            \"phone\": \"255753111039\",\n            \"_id\": \"592029e6e8dd8e00048c185f\",\n            \"permissions\": [],\n            \"email\": \"kbng.moses@gmail.com\",\n            \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n        },\n        \"code\": \"HLW170001\",\n        \"description\": \"For three days now we dont have water\",\n        \"address\": \"Mikocheni\",\n        \"method\": \"Call\",\n        \"status\": {\n            \"name\": \"Open\",\n            \"weight\": -5,\n            \"color\": \"#0D47A1\",\n            \"_id\": \"592029e5e8dd8e00048c180d\",\n            \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n            \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n            \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n        },\n        \"priority\": {\n            \"name\": \"Low\",\n            \"weight\": 0,\n            \"color\": \"#1B5E29\",\n            \"_id\": \"592029e5e8dd8e00048c1816\",\n            \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n            \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n            \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n        },\n        \"attachments\": [],\n        \"ttr\": 0,\n        \"_id\": \"592029e6e8dd8e00048c1859\",\n        \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n        \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n        \"ttrSeconds\": 0,\n        \"ttrMinutes\": 0,\n        \"ttrHours\": 0,\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n    },\n    {\n        \"jurisdiction\": {\n            \"code\": \"I\",\n            \"name\": \"Ilala\",\n            \"phone\": \"255714999887\",\n            \"email\": \"N/A\",\n            \"domain\": \"ilala.dawasco.org\",\n            \"_id\": \"592029e6e8dd8e00048c1850\",\n            \"longitude\": 0,\n            \"latitude\": 0,\n            \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e6e8dd8e00048c1850\"\n        },\n        \"service\": {\n            \"group\": {\n                \"code\": \"N\",\n                \"name\": \"Non Commercial\",\n                \"color\": \"#960F1E\",\n                \"_id\": \"592029e6e8dd8e00048c184d\",\n                \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n            },\n            \"code\": \"LK\",\n            \"name\": \"Leakage\",\n            \"color\": \"#D31DBB\",\n            \"_id\": \"592029e6e8dd8e00048c1853\",\n            \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1853\"\n        },\n        \"call\": {\n            \"startedAt\": \"2017-05-20T11:35:02.502Z\",\n            \"endedAt\": \"2017-05-20T11:35:02.503Z\",\n            \"duration\": 0.001\n        },\n        \"reporter\": {\n            \"name\": \"Juma John\",\n            \"phone\": \"255765952971\",\n            \"email\": \"scala.lally@gmail.com\"\n        },\n        \"operator\": {\n            \"name\": \"Juma John\",\n            \"phone\": \"255765952971\",\n            \"_id\": \"592029e6e8dd8e00048c1856\",\n            \"permissions\": [],\n            \"email\": \"scala.lally@gmail.com\",\n            \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n        },\n        \"assignee\": {\n            \"name\": \"Joachim Mangilima\",\n            \"phone\": \"255713111111\",\n            \"_id\": \"592029e6e8dd8e00048c1865\",\n            \"permissions\": [],\n            \"email\": \"joachimm3@gmail.com\",\n            \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1865\"\n        },\n        \"code\": \"ILK170001\",\n        \"description\": \"There have been a leakage at my area. Lots of water in the street\",\n        \"address\": \"Kijitonyama\",\n        \"method\": \"Call\",\n        \"status\": {\n            \"name\": \"Open\",\n            \"weight\": -5,\n            \"color\": \"#0D47A1\",\n            \"_id\": \"592029e5e8dd8e00048c180d\",\n            \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n            \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n            \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n        },\n        \"priority\": {\n            \"name\": \"Low\",\n            \"weight\": 0,\n            \"color\": \"#1B5E29\",\n            \"_id\": \"592029e5e8dd8e00048c1816\",\n            \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n            \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n            \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n        },\n        \"attachments\": [],\n        \"ttr\": 0,\n        \"_id\": \"592029e6e8dd8e00048c185a\",\n        \"createdAt\": \"2017-05-20T11:35:02.523Z\",\n        \"updatedAt\": \"2017-05-20T11:36:34.084Z\",\n        \"ttrSeconds\": 0,\n        \"ttrMinutes\": 0,\n        \"ttrHours\": 0,\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c185a\"\n    }\n   ],\n   \"pages\": 1,\n   \"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/servicerequests/:id",
    "title": "Update Service Request information",
    "name": "PatchServiceRequest",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Request Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"service\": {\n           \"group\": {\n               \"code\": \"N\",\n               \"name\": \"Non Commercial\",\n               \"color\": \"#960F1E\",\n               \"_id\": \"592029e6e8dd8e00048c184d\",\n               \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n           },\n           \"code\": \"LW\",\n           \"name\": \"Lack of Water\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c1852\",\n           \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n       },\n       \"call\": {\n           \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"duration\": 0\n       },\n       \"reporter\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"email\": \"scala.lally@gmail.com\"\n       },\n       \"operator\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"_id\": \"592029e6e8dd8e00048c1856\",\n           \"permissions\": [],\n           \"email\": \"scala.lally@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n       },\n       \"assignee\": {\n           \"name\": \"Moses Kabungo\",\n           \"phone\": \"255753111039\",\n           \"_id\": \"592029e6e8dd8e00048c185f\",\n           \"permissions\": [],\n           \"email\": \"kbng.moses@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n       },\n       \"code\": \"HLW170001\",\n       \"description\": \"For three days now we dont have water\",\n       \"address\": \"Mikocheni\",\n       \"method\": \"Call\",\n       \"status\": {\n           \"name\": \"Open\",\n           \"weight\": -5,\n           \"color\": \"#0D47A1\",\n           \"_id\": \"592029e5e8dd8e00048c180d\",\n           \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n       },\n       \"priority\": {\n           \"name\": \"Low\",\n           \"weight\": 0,\n           \"color\": \"#1B5E29\",\n           \"_id\": \"592029e5e8dd8e00048c1816\",\n           \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n           \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n       },\n       \"attachments\": [],\n       \"ttr\": 0,\n       \"_id\": \"592029e6e8dd8e00048c1859\",\n       \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n       \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n       \"ttrSeconds\": 0,\n       \"ttrMinutes\": 0,\n       \"ttrHours\": 0,\n       \"longitude\": 0,\n       \"latitude\": 0,\n       \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/servicerequests",
    "title": "Create a new service request",
    "name": "PostServiceRequest",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"service\": {\n           \"group\": {\n               \"code\": \"N\",\n               \"name\": \"Non Commercial\",\n               \"color\": \"#960F1E\",\n               \"_id\": \"592029e6e8dd8e00048c184d\",\n               \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n           },\n           \"code\": \"LW\",\n           \"name\": \"Lack of Water\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c1852\",\n           \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n       },\n       \"call\": {\n           \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"duration\": 0\n       },\n       \"reporter\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"email\": \"scala.lally@gmail.com\"\n       },\n       \"operator\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"_id\": \"592029e6e8dd8e00048c1856\",\n           \"permissions\": [],\n           \"email\": \"scala.lally@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n       },\n       \"assignee\": {\n           \"name\": \"Moses Kabungo\",\n           \"phone\": \"255753111039\",\n           \"_id\": \"592029e6e8dd8e00048c185f\",\n           \"permissions\": [],\n           \"email\": \"kbng.moses@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n       },\n       \"code\": \"HLW170001\",\n       \"description\": \"For three days now we dont have water\",\n       \"address\": \"Mikocheni\",\n       \"method\": \"Call\",\n       \"status\": {\n           \"name\": \"Open\",\n           \"weight\": -5,\n           \"color\": \"#0D47A1\",\n           \"_id\": \"592029e5e8dd8e00048c180d\",\n           \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n       },\n       \"priority\": {\n           \"name\": \"Low\",\n           \"weight\": 0,\n           \"color\": \"#1B5E29\",\n           \"_id\": \"592029e5e8dd8e00048c1816\",\n           \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n           \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n       },\n       \"attachments\": [],\n       \"ttr\": 0,\n       \"_id\": \"592029e6e8dd8e00048c1859\",\n       \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n       \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n       \"ttrSeconds\": 0,\n       \"ttrMinutes\": 0,\n       \"ttrHours\": 0,\n       \"longitude\": 0,\n       \"latitude\": 0,\n       \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests"
      }
    ]
  },
  {
    "type": "put",
    "url": "/servicerequests/:id",
    "title": "Update Service Request information",
    "name": "PutServiceRequest",
    "group": "ServiceRequest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Service Request Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>A jurisdiction responsible in handling service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>A service group under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Service",
            "description": "<p>A service under which request(issue) belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Call",
            "description": "<p>Log operator call details at a call center</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Reporter",
            "description": "<p>A party i.e civilian, customer etc which reported an issue(service request)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Operator",
            "description": "<p>A party oversee the work on the service request(issue).It also a party that is answerable for the progress and status of the service request(issue) to a reporter. For jurisdiction that own a call center, then operator is a person who received a call.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignee",
            "description": "<p>A party assigned to work on the service request(issue). It also a party that is answerable for the progress and status of the service request(issue) to operator and overall jurisdiction administrative structure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>A unique human readable identifier of the service request(issue). It mainly used by reporter to query for status and progress of the reported issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A detailed human readable explanation about the service request(issue).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>A human entered address or description of location where service request(issue) happened.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>A communication(contact) method(mechanism) used by a reporter to report the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>A current status of the service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "priority",
            "description": "<p>A priority of the service request(issue).  It used to weight a service request(issue) relative  to other(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attachments",
            "description": "<p>Associated file(s) with service request(issue)</p>"
          },
          {
            "group": "Success 200",
            "type": "Duration",
            "optional": false,
            "field": "ttr",
            "description": "<p>A time taken to resolve the issue(service request) in duration format.  Used to calculate Mean Time To Resolve(MTTR) KPI.  It calculated as time taken since the issue reported to the  time when issue resolved.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ServiceRequest Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Service request creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Service request last updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrSeconds",
            "description": "<p>A time taken to resolve the issue(service request) in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrMinutes",
            "description": "<p>A time taken to resolve the issue(service request) in minutes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ttrHours",
            "description": "<p>A time taken to resolve the issue(service request) in hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Service request(issue) longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Service request(issue) latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>ServiceRequest URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of ServiceRequest results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"jurisdiction\": {\n           \"code\": \"H\",\n           \"name\": \"HQ\",\n           \"phone\": \"255714999888\",\n           \"email\": \"N/A\",\n           \"domain\": \"dawasco.org\",\n           \"_id\": \"592029e5e8dd8e00048c184b\",\n           \"longitude\": 0,\n           \"latitude\": 0,\n           \"uri\": \"https://dawasco.herokuapp.com/jurisdictions/592029e5e8dd8e00048c184b\"\n       },\n       \"service\": {\n           \"group\": {\n               \"code\": \"N\",\n               \"name\": \"Non Commercial\",\n               \"color\": \"#960F1E\",\n               \"_id\": \"592029e6e8dd8e00048c184d\",\n               \"uri\": \"https://dawasco.herokuapp.com/servicegroups/592029e6e8dd8e00048c184d\"\n           },\n           \"code\": \"LW\",\n           \"name\": \"Lack of Water\",\n           \"color\": \"#960F1E\",\n           \"_id\": \"592029e6e8dd8e00048c1852\",\n           \"uri\": \"https://dawasco.herokuapp.com/services/592029e6e8dd8e00048c1852\"\n       },\n       \"call\": {\n           \"startedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"endedAt\": \"2017-05-20T11:35:02.421Z\",\n           \"duration\": 0\n       },\n       \"reporter\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"email\": \"scala.lally@gmail.com\"\n       },\n       \"operator\": {\n           \"name\": \"Juma John\",\n           \"phone\": \"255765952971\",\n           \"_id\": \"592029e6e8dd8e00048c1856\",\n           \"permissions\": [],\n           \"email\": \"scala.lally@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c1856\"\n       },\n       \"assignee\": {\n           \"name\": \"Moses Kabungo\",\n           \"phone\": \"255753111039\",\n           \"_id\": \"592029e6e8dd8e00048c185f\",\n           \"permissions\": [],\n           \"email\": \"kbng.moses@gmail.com\",\n           \"uri\": \"https://dawasco.herokuapp.com/parties/592029e6e8dd8e00048c185f\"\n       },\n       \"code\": \"HLW170001\",\n       \"description\": \"For three days now we dont have water\",\n       \"address\": \"Mikocheni\",\n       \"method\": \"Call\",\n       \"status\": {\n           \"name\": \"Open\",\n           \"weight\": -5,\n           \"color\": \"#0D47A1\",\n           \"_id\": \"592029e5e8dd8e00048c180d\",\n           \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n           \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n       },\n       \"priority\": {\n           \"name\": \"Low\",\n           \"weight\": 0,\n           \"color\": \"#1B5E29\",\n           \"_id\": \"592029e5e8dd8e00048c1816\",\n           \"createdAt\": \"2017-05-20T11:35:01.586Z\",\n           \"updatedAt\": \"2017-07-29T19:12:40.178Z\",\n           \"uri\": \"https://dawasco.herokuapp.com/priorities/592029e5e8dd8e00048c1816\"\n       },\n       \"attachments\": [],\n       \"ttr\": 0,\n       \"_id\": \"592029e6e8dd8e00048c1859\",\n       \"createdAt\": \"2017-05-20T11:35:02.474Z\",\n       \"updatedAt\": \"2017-05-20T11:36:45.294Z\",\n       \"ttrSeconds\": 0,\n       \"ttrMinutes\": 0,\n       \"ttrHours\": 0,\n       \"longitude\": 0,\n       \"latitude\": 0,\n       \"uri\": \"https://dawasco.herokuapp.com/servicerequests/592029e6e8dd8e00048c1859\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/service_request_router.js",
    "groupTitle": "ServiceRequest",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/servicerequests/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/statuses/:id",
    "title": "Delete Status information",
    "name": "DeleteStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Status unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Resolved\",\n   \"weight\": -5,\n   \"color\": \"#0D47A1\",\n   \"_id\": \"592029e5e8dd8e00048c180d\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/statuses/:id",
    "title": "Request Status information",
    "name": "GetStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Status unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Open\",\n   \"weight\": -5,\n   \"color\": \"#0D47A1\",\n   \"_id\": \"592029e5e8dd8e00048c180d\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/statuses",
    "title": "Get all statuses",
    "name": "GetStatutes",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://dawasco.herokuapp.com/statuses",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Number of results pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of status results  in the current json response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"statuses\": [\n      {\n         \"name\": \"Open\",\n         \"weight\": -5,\n         \"color\": \"#0D47A1\",\n         \"_id\": \"592029e5e8dd8e00048c180d\",\n          \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n      },\n      {\n          \"name\": \"In Progress\",\n          \"weight\": 0,\n          \"color\": \"#F9A825\",\n          \"_id\": \"592029e5e8dd8e00048c180e\",\n          \"createdAt\": \"2017-05-20T11:35:01.334Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.334Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180e\"\n      },\n      {\n          \"name\": \"Closed\",\n          \"weight\": 5,\n          \"color\": \"#1B5E20\",\n          \"_id\": \"592029e5e8dd8e00048c180f\",\n          \"createdAt\": \"2017-05-20T11:35:01.380Z\",\n          \"updatedAt\": \"2017-05-20T11:35:01.380Z\",\n          \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180f\"\n      }\n   ],\n   \"pages\": 1,\n   \"count\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/statuses/:id",
    "title": "Update Status information",
    "name": "PatchStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Status unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Human readable name of the status e.g Open, In Progress, Resolved.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Resolved\",\n   \"weight\": -5,\n   \"color\": \"#0D47A1\",\n   \"_id\": \"592029e5e8dd8e00048c180d\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/statuses",
    "title": "Create a new status",
    "name": "PostStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Sent content type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the status e.g Open, In Progress, Resolved.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"name\": \"Suspended\",\n    \"weight\": 2,\n    \"color\": \"#0D47A1\",\n    \"_id\": \"592029e5e8dd8e00048c180d\",\n    \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n    \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n    \"uri\": \"https://dawasco.herokuapp.com/statuses/597acd4932494800041ed7b2\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses"
      }
    ]
  },
  {
    "type": "put",
    "url": "/statuses/:id",
    "title": "Update Status information",
    "name": "PutStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>Accept value i.e application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type i.e application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Status unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Human readable name of the status e.g Open, In Progress, Resolved.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Status Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight of the status to help in ordering service request(issue) based on status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>A color code used to differentiate a service request status visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Status Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Status creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Status updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Status URI</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Resolved\",\n   \"weight\": -5,\n   \"color\": \"#0D47A1\",\n   \"_id\": \"592029e5e8dd8e00048c180d\",\n   \"createdAt\": \"2017-05-20T11:35:01.059Z\",\n   \"updatedAt\": \"2017-05-20T11:35:01.059Z\",\n   \"uri\": \"https://dawasco.herokuapp.com/statuses/592029e5e8dd8e00048c180d\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routers/status_router.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://dawasco.herokuapp.com/statuses/:id"
      }
    ]
  }
] });
