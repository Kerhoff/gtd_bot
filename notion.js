const { Client } = require("@notionhq/client");
const config = require("./secrets");

const NOTION_TOKEN = config.notionToken;
const DATABASE_ID = config.databaseId;
const notion = new Client({ auth: NOTION_TOKEN });

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")