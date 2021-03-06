myApp.controller('searchResultController', [
  '$scope',
  '$resource',
  '$routeParams',
  'showService',
  function ($scope, $resource, $routeParams, showService) {
    $scope.show = showService.show

    $scope.show = $routeParams.show || showService.show

    showAPI = $resource("http://api.tvmaze.com/search/shows",
      // { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } }
    )

    $scope.results = [
      {
        "score": 0.45390466,
        "show": {
          "id": 23795,
          "url": "https://www.tvmaze.com/shows/23794/the-flip-wilson-show",
          "name": "The Flip Wilson Show",
          "type": "Variety",
          "language": "English",
          "genres": [
            "Comedy",
            "Music"
          ],
          "status": "Ended",
          "runtime": 60,
          "averageRuntime": 60,
          "premiered": "1970-09-17",
          "officialSite": null,
          "schedule": {
            "time": "20:00",
            "days": [
              "Thursday"
            ]
          },
          "rating": {
            "average": null
          },
          "weight": 0,
          "network": {
            "id": 1,
            "name": "NBC",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            }
          },
          "webChannel": null,
          "dvdCountry": null,
          "externals": {
            "tvrage": null,
            "thetvdb": 72327,
            "imdb": "tt0065294"
          },
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/89/224423.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/89/224423.jpg"
          },
          "summary": "<p><b>The Flip Wilson Show</b> also known as \"Flip\" was an hour-long variety show that aired in the U.S. on NBC from September 17, 1970 to June 27, 1974. The show starred American comedian Flip Wilson; the program was one of the first American television programs starring a black person in the title role to become highly successful with a white audience. Specifically, it was the first successful network variety series starring an African American. During its first two seasons, its Nielsen ratings made it the nation's second most watched show. The show consisted of many skits over 60 minutes. It also broke new ground in American television by using a \"theatre-in-the-round\" stage format, with the audience seated on all sides of a circular performance area (with some seats located <i>behind</i> the sketch sets on occasion). Wilson was most famous for creating the role of Geraldine Jones, a sassy, modern woman who had a boyfriend named Killer (who, when not in prison, was at the pool hall). Flip also created the role of Reverend Leroy, who was the minister of the Church of What's Happening Now!. New parishioners were wary of coming to the church as it was hinted that Reverend Leroy was a con artist. Wilson popularized such catchphrases as \"What you see is what you get\", and \"The Devil made me do it!\".</p>",
          "updated": 1573151886,
          "_links": {
            "self": {
              "href": "https://api.tvmaze.com/shows/23794"
            },
            "previousepisode": {
              "href": "https://api.tvmaze.com/episodes/1019106"
            }
          }
        }
      },
      {
        "score": 0.65390466,
        "show": {
          "id": 23794,
          "url": "https://www.tvmaze.com/shows/23794/the-flip-wilson-show",
          "name": "Flip Wilson Show",
          "type": "Variety",
          "language": "English",
          "genres": [
            "Comedy",
            "Music"
          ],
          "status": "Ended",
          "runtime": 60,
          "averageRuntime": 60,
          "premiered": "1980-09-17",
          "officialSite": null,
          "schedule": {
            "time": "20:00",
            "days": [
              "Thursday"
            ]
          },
          "rating": {
            "average": null
          },
          "weight": 0,
          "network": {
            "id": 1,
            "name": "NBC",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            }
          },
          "webChannel": null,
          "dvdCountry": null,
          "externals": {
            "tvrage": null,
            "thetvdb": 72327,
            "imdb": "tt0065294"
          },
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/89/224423.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/89/224423.jpg"
          },
          "summary": "<p><b>The Flip Wilson Show</b> also known as \"Flip\" was an hour-long variety show that aired in the U.S. on NBC from September 17, 1970 to June 27, 1974. The show starred American comedian Flip Wilson; the program was one of the first American television programs starring a black person in the title role to become highly successful with a white audience. Specifically, it was the first successful network variety series starring an African American. During its first two seasons, its Nielsen ratings made it the nation's second most watched show. The show consisted of many skits over 60 minutes. It also broke new ground in American television by using a \"theatre-in-the-round\" stage format, with the audience seated on all sides of a circular performance area (with some seats located <i>behind</i> the sketch sets on occasion). Wilson was most famous for creating the role of Geraldine Jones, a sassy, modern woman who had a boyfriend named Killer (who, when not in prison, was at the pool hall). Flip also created the role of Reverend Leroy, who was the minister of the Church of What's Happening Now!. New parishioners were wary of coming to the church as it was hinted that Reverend Leroy was a con artist. Wilson popularized such catchphrases as \"What you see is what you get\", and \"The Devil made me do it!\".</p>",
          "updated": 1573151886,
          "_links": {
            "self": {
              "href": "https://api.tvmaze.com/shows/23794"
            },
            "previousepisode": {
              "href": "https://api.tvmaze.com/episodes/1019106"
            }
          }
        }
      }
    ]

    $scope.results = showAPI.query({ q: $scope.show })

    $scope.orderByProperty = 'score'
    $scope.reverse = true

    $scope.changeOrderBy = function (propertyName) {
      $scope.orderByProperty = propertyName
      $scope.reverse = !$scope.reverse

    }
  }])
