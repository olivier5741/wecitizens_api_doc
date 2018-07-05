# WeCitizens API doc

API specs for wecitizens (openapi)

Website on : 

* https://olivier5741.github.io/wecitizens_api_doc/ (ReDoc)
* https://olivier5741.github.io/wecitizens_api_doc/swagger-ui/ (swagger-ui)
* https://olivier5741.github.io/wecitizens_api_doc/wecitizens_openapi.yml (specs)

## Usage

* `npm install` to install package
* `npm start` to run local website

## Libraries

* ReDoc : https://github.com/Rebilly/ReDoc
* Swagger-UI : https://github.com/swagger-api/swagger-ui

## ISO

Belgian provinces and regions : https://en.wikipedia.org/wiki/ISO_3166-2:BE

## API

* local route : http://localhost:3000/api
* public route : https://olivier5741.github.io/wecitizens_api_doc/api

### Municipal elections

1. Find main election through [/vote/election/2018_be_municipal.json](/docs/api/vote/election/2018_be_municipal.json)
2. Get zip code. Use `6850`
3. Find local election through [/vote/election/2018_be_municipal/district/be_6850.json](/docs/api/vote/election/2018_be_municipal/district/be_6850.json).
4. Find related poll through [/gps/poll/2018_be_municipal_be_6850.json](/docs/api/gps/poll/2018_be_municipal_be_6850.json) so you get the survey key.
5. Get the survey through [/gps/survey/2018_be_municipal_wallonia_rural.json](/docs/api/gps/survey/2018_be_municipal_wallonia_rural.json)




