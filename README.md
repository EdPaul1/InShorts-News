
# Inshorts News App

The App fetches news data from the Inshorts News Api and avails it to users.News is available in different categories that the user can choose to select and filter to only view news from that specific category.

A reader can access the full news article by hovering and clicking on the title.

The following news categories are available as of this documentation:
 * Business News
 * Politics
 * Technology
 * Startup
 * Entertainment
 * Science

The reader is able to leave comments that other readers can view and continue the conversation.



## Screenshots

![App Screenshot]()


## Acknowledgements

 - [Inshorts API](https://github.com/cyberboysumanjay/Inshorts-News-API)

## API Reference

#### API Usage

```http
  GET /api/items
```

#### Get item
Make a get request specifying the category of news you want

```http
  https://inshorts.deta.dev/news?category={category_name}
```
Example : https://inshorts.deta.dev/news?category=business

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category_name`      | `string` | **Required**. News category of choice |

```{
  "category": "technology",
  "data": [
    {
      "author": "Pragya Swastik",
      "content": "American actor Aaron Paul, who portrayed Jesse Pinkman in 'Breaking Bad', revealed that he uses a 'credit card-sized dumb phone' that cannot store any apps and can only make calls and send texts. \"There's no camera or emailing,\" Paul said, adding that he's planning to buy a flip phone. \"I haven't owned a computer in over 10 years,\" he added.",
      "date": "15 Mar 2020,Sunday",
      "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/03_mar/15_sun/img_1584273701082_423.jpg",
      "readMoreUrl": "https://www.dailymail.co.uk/tvshowbiz/article-8111761/Breaking-Bad-star-Aaron-Paul-reveals-owned-computer-decade-prefers-FLIP-PHONE.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      "time": "06:17 pm",
      "title": "\nI use a 'dumb phone' that only makes calls & sends texts: 'Breaking Bad' actor\n",
      "url": "https://www.inshorts.com/en/news/i-use-a-dumb-phone-that-only-makes-calls-sends-texts-breaking-bad-actor-1584276455594"
    },
    {
      "author": "Pragya Swastik",
      "content": "Google recently shared five basic protective measures against coronavirus that can be followed by people worldwide. These include washing hands often, coughing into the elbow, not touching the face, staying over three feet apart from others and staying at home on feeling sick. Google engineers are also building a website to screen potential coronavirus patients in the US.",
      "date": "16 Mar 2020,Monday",
      "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/03_mar/15_sun/img_1584292734587_739.jpg",
      "readMoreUrl": "https://twitter.com/Google/status/1238893403821113344?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      "time": "07:00 am",
      "title": "\nGoogle shares 5 basic protective measures against coronavirus\n",
      "url": "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969"
    }
    ],
  "success": true
}
```


## Technologies
* Javascript
* HTML & CSS

## Deployment

To deploy this project, Go ahead and Clone this repository and cd the folder name

```bash
  git clone https://github.com/EdPaul1/InShorts-NewsApp.git
```
```
cd InShorts-NewsApp
```
Open VScode to view the folders in your code editor.
## License

[MIT](https://choosealicense.com/licenses/mit/)

