const { Client } = require("@notionhq/client");
const { notionToken, databaseId } = require("./secrets");

const NOTION_TOKEN = notionToken;
const DATABASE_ID = databaseId;
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


async function retrieveDatabase() {
  const response = await notion.databases.retrieve({ database_id: DATABASE_ID });
  console.log(response);
};


const findAllPages = async () => {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });
  console.log(response);
};


addItem("Yurts in Big Sur, California");
retrieveDatabase();
findAllPages();