console.log("The bot is starting");

var Twit = require('twit');
var config = require('./config') /*01* call config.js for attributes of T */

var T = new Twit(config); /* call 01 with attributees  */

let params = {
  q: 'golden retrievers',
  count: 5
}

T.get('search/tweets', params, gotData);

function gotData(error, data, response) {
  if (error) {
    console.log("Error");
    return;
  }
  let tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log('\n',tweets[i].text,'\n');
  }
}




/**
 * {
  created_at: 'Tue Feb 04 01:55:31 +0000 2020',
  id: 1224511774025646000,
  id_str: '1224511774025646081',
  text: 'RT @9NewsAUS: WATCH: Willow and Harper the golden retrievers have proved teamwork really does make the dream work after they tried their lu…'
,
  truncated: false,
  entities: { hashtags: [], symbols: [], user_mentions: [ [Object] ], urls: [] },
  metadata: { iso_language_code: 'en', result_type: 'recent' },
  source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 29915822,
    id_str: '29915822',
    name: 'Anup Shrestha',
    screen_name: 'anupismyname',
    location: 'sydney',
    description: '',
    url: null,
    entities: { description: [Object] },
    protected: false,
    followers_count: 56,
    friends_count: 596,
    listed_count: 0,
    created_at: 'Thu Apr 09 04:01:51 +0000 2009',
    favourites_count: 978,
    utc_offset: null,
    time_zone: null,
    geo_enabled: false,
    verified: false,
    statuses_count: 470,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: '000000',
    profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_tile: false,
    profile_image_url: 'http://pbs.twimg.com/profile_images/1127178409757437952/ozcX_f3r_normal.jpg',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1127178409757437952/ozcX_f3r_normal.jpg',
    profile_banner_url: 'https://pbs.twimg.com/profile_banners/29915822/1504346677',
    profile_link_color: '3B94D9',
    profile_sidebar_border_color: '000000',
    profile_sidebar_fill_color: '000000',
    profile_text_color: '000000',
    profile_use_background_image: false,
    has_extended_profile: false,
    default_profile: false,
    default_profile_image: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none'
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  retweeted_status: {
    created_at: 'Mon Feb 03 22:00:00 +0000 2020',
    id: 1224452504529727500,
    id_str: '1224452504529727490',
    text: 'WATCH: Willow and Harper the golden retrievers have proved teamwork really does make the dream work after they trie… https://t.co/bj2e8QOXnL',
    truncated: true,
    entities: { hashtags: [], symbols: [], user_mentions: [], urls: [Array] },
    metadata: { iso_language_code: 'en', result_type: 'recent' },
    source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 22993014,
      id_str: '22993014',
      name: 'Nine News Australia',
      screen_name: '9NewsAUS',
      location: 'Australia',
      description: "Australia's No.1: Follow @9NewsSyd | @9NewsMelb | @9NewsQueensland | @9NewsGoldCoast | @9NewsAdel | @9NewsDarwin | @9NewsPerth",
      url: null,
      entities: [Object],
      protected: false,
      followers_count: 549895,
      friends_count: 219,
      listed_count: 2356,
      created_at: 'Thu Mar 05 22:51:02 +0000 2009',
      favourites_count: 241,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: true,
      statuses_count: 282822,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '2F4C6C',
      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url: 'http://pbs.twimg.com/profile_images/1219125014043037698/NI_blYDE_normal.jpg',
      profile_image_url_https: 'https://pbs.twimg.com/profile_images/1219125014043037698/NI_blYDE_normal.jpg',
      profile_banner_url: 'https://pbs.twimg.com/profile_banners/22993014/1579566369',
      profile_link_color: '1B95E0',
      profile_sidebar_border_color: 'FFFFFF',
      profile_sidebar_fill_color: 'FFFFFF',
      profile_text_color: '2161A6',
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 19,
    favorite_count: 125,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  },
  is_quote_status: false,
  retweet_count: 19,
  favorite_count: 0,
  favorited: false,
  retweeted: false,
  lang: 'en'
}
 * 
 */