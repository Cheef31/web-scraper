const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://coinmarketcap.com/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const currencies = []
        $('.sc-16r8icm-0 escjiH', html).each(function() {
            const currencyName = $(this).find('a').find('p').text()
            currencies.push({
                price
            })
        })
        console.log(currencies)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('Server running on PORT: '+ PORT))