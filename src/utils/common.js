import { createClient } from "contentful-management"

const dotenv = require("dotenv")
dotenv.config({
  path: `.env.${process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN}`,
})

export const IncrementViewCount = (entryId, prevCount) => {
  console.log(prevCount)
  const client = createClient({
    accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN,
  })
  client
    .getSpace(process.env.GATSBY_SPACE_ID)
    .then(space => space.getEnvironment("master"))
    .then(enviroment => enviroment.getEntry(entryId))
    .then(entry => {
      console.log(entryId)
      entry.fields.counter["en-US"].counter = `${Number(prevCount) + 1}`
      console.log(entry.fields.counter["en-US"].counter)
      return entry.update()
    })
    .then(
      entry => console.log(`Entry ${entry.sys.id} updated.`) || entry.publish()
    )
    .then(entry => console.log(`Entry ${entry.sys.id} published.`))
    .catch(console.error)
}
