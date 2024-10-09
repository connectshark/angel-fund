import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  const fetch_response = await fetch('https://fundhot.com/forum/%E5%A4%A9%E4%BD%BF')
  const data = await fetch_response.text()

  const $ = cheerio.load(data)

  const list = []
  const selector = `#__nuxt div.col-span-2.flex.items-start a`
  $(selector).each((index, element) => {
    const link = $(element).attr('href')
    const content = $(element).find('div').text().trim()
    if (link) {
      const linkString = link.split('/')
      list.push({
        link: linkString[linkString.length - 1],
        content
      })
    }
  })
  return list
})
