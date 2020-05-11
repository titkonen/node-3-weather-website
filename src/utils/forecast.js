const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=28bbcb97269871b7d9d1a59fa40814d9&query=boston'
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=28bbcb97269871b7d9d1a59fa40814d9&query=' + latitude + '' + longitude + '&units=f'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current.weather.descriptions[0])
            callback(
                undefined, 
                body.current.weather.descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + 'degress out.')
        }
    })
}

module.exports = forecast