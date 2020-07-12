import { createClient } from "contentful-management"

const dotenv = require("dotenv")
dotenv.config({
  path: `.env.${process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN}`,
})

export const IncrementViewCount = (entryId, prevCount) => {
  const client = createClient({
    accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN,
  })
  client
    .getSpace(process.env.GATSBY_SPACE_ID)
    .then(space => space.getEnvironment("master"))
    .then(enviroment => enviroment.getEntry(entryId))
    .then(entry => {
      entry.fields.counter["en-US"].counter = `${Number(prevCount) + 1}`
      return entry.update()
    })
    .then(entry => entry.publish())
    .catch(console.error)
}
