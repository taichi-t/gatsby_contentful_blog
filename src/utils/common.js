import { createClient } from "contentful-management"

export const IncrementViewCount = (enryId, prevCount) => {
  require("dotenv").config({
    path: `.env`,
  })
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  client
    .getSpace("nwdyo7rxqvgg")
    .then(space => space.getEntry(enryId))
    .then(entry => {
      entry.fields.counter["en-US"].counter = `${prevCount + 1}`
      return entry.update()
    })
    .then(entry => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error)
}
