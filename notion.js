const { Client } = require("@notionhq/client");

const notion = new Client({ auth: 'secret_nmdusFO5yCiXoL1oUeJ7fi9PSIhquKYnVLMRnhd3NoZ' })
console.log(notion)

const databaseId = '17469c94fb514db1a3d25f005fc49cf5'

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
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