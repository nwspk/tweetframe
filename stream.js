var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'vLpQaMLmjlVEuCt2WkCC11zll',
    consumer_secret: 'cQTZnlXCq3kfd9qcsglZs6AIiFv0znih4IumiQegfw9dAB2t0r',
    token: '380863305-AyWgwNz9gO91JKF4fN6dKMXYXOUvzdLit0gYtBfu',
    token_secret: 'R76mDpg9n1xyD4dDKdc36bqFCilGY6oxePzw1IY1h7A6Z'
  })
  , colors = require('colors')

t.on('tweet', function (tweet) {
  console.log('@'+tweet.user.screen_name + ':')
  console.log(colors.green(tweet.text))
})

t.on('error', function (err) {
  console.log('Oh no')
})

t.track('nwspk')
t.track('#nwspk')
t.track('@nwspk')
t.track('#citizenbeta')
t.track('rain')