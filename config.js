var config = {}

config.endpoint = "https://testyoubikedb.documents.azure.com:443/";
config.authKey = "jnjYPbVWgXVmZ2/9iHvGvEeLVvJ2DP0hUbn+Xwt3keay5NfRgnjXlPaNdMHZAUNUmMWTzfRaISr+SunXIWqbuw==";

config.dbDefinition = {"id": "youbikes"};
config.collDefinition = {"id": "youbikecollection"};

var documents = {
  "Andersen": {
    "id": "AndersenFamily",
    "LastName": "Andersen",
    "Parents": [
      {
        "FirstName": "Thomas"
      },
      {
        "FirstName": "Mary Kay"
      }
    ],
    "Children": [
      {
        "FirstName": "Henriette Thaulow",
        "Gender": "female",
        "Grade": 5,
        "Pets": [
          {
            "GivenName": "Fluffy"
          }
        ]
      }
    ],
    "Address": {
      "State": "WA",
      "County": "King",
      "City": "Seattle"
    }
  },
  "Wakefield":   {
      "id": "WakefieldFamily",
      "Parents": [
        {
          "FamilyName": "Wakefield",
          "FirstName": "Robin"
        },
        {
          "FamilyName": "Miller",
          "FirstName": "Ben"
        }
      ],
      "Children": [
        {
          "FamilyName": "Merriam",
          "FirstName": "Jesse",
          "Gender": "female",
          "Grade": 8,
          "Pets": [
            {
              "GivenName": "Goofy"
            },
            {
              "GivenName": "Shadow"
            }
          ]
        },
        {
          "FamilyName": "Miller",
          "FirstName": "Lisa",
          "Gender": "female",
          "Grade": 1
        }
      ],
      "Address": {
        "State": "NY",
        "County": "Manhattan",
        "City": "NY"
      },
      "IsRegistered": false
    }
};

config.docsDefinitions = documents;

module.exports = config;
