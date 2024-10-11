export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const forum = query.forum || 43
  const page = query.page || 1
  const fetch_response = await fetch(`https://api.fundhot.com/api/forum/topics/new/${ forum }?page=${ page }`)
  console.log(fetch_response)
  const data = await fetch_response.json()
  return data.data
})
