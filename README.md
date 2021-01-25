# git-hub 구버전 홈페이지를 제작해 볼겁니다.


# GitHub main page
github 웹사이트 렌딩 페이지 만들었습니다.	GitHub 사이트의 메인 페이지를 반응형으로 작업합니다.
여기서는 반응형, 동영상 삽입, 수평예제, 지도 api를 써서 지도를 넣는 방법들을 해보았습니다.

## Text

### General text

```
Personal
Open source
Business
Explore

Pricing
Blog
Support

How people build software
Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.

Use at least one letter, one numeral, and seven characters.
By clicking "Sign up for GitHub", you agree to our terms of service and privacy policy. We'll occasionally send you account related emails.

Welcome home, developers
GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.

For everything you build
Host and manage your code on GitHub. You can keep your work private or share it with the world.

A better way to work
From hobbyists to professionals, GitHub helps developers simplify the way they build software.

Millions of projects
GitHub is home to millions of open source projects. Try one out or get inspired to create your own.

One platform, from start to finish
With hundreds of integrations, GitHub is flexible enough to be at the center of your development process.

Where is GitHub?
GitHub is where people build software. More than 18 million people use GitHub to discover, fork, and contribute to over 48 million projects.

Public projects are always free. Work together across unlimited private repositories for $7 / month.

© 2016 GitHub, Inc.
Terms
Privacy
Security
Status
Help

Contact GitHub
API
Training
Shop
Blog
About
```

### Video link

```
https://www.youtube.com/watch?v=afvT1c1ii0c
```

## Code

### `index.html`

```html
<meta name="author" content="HEROPY">
<meta name="description" content="GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1">

<!-- http://ogp.me/ -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="GitHub">
<meta property="og:title" content="Build software better, together">
<meta property="og:description" content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.">
<meta property="og:image" content="img/logo__github.png">
<meta property="og:url" content="https://github.com">

<!-- https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html -->
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="GitHub">
<meta property="twitter:title" content="Build software better, together">
<meta property="twitter:description" content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.">
<meta property="twitter:image" content="img/logo__github.png">
<meta property="twitter:url" content="https://github.com">
```


### `main.js`

#### Insert Google Map.

`initMap` 함수에 'Google Map'에서 사용할 'Option'을 입력하세요.

```js
function initMap() {

    // 위도(Latitude), 경도(Longitude)
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });
}
```

#### Write JavaScript code.

```js
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document);
```


## Media(Grid) options

> 디바이스 종류에 따른 단위는 '기획 / 디자인' 단계에서 결정하는 것이 효과적입니다.

| 종류 | 디바이스 | 단위(px) |
|:---:|:---:|:---:|
| Large Devices | Desktops | 1024px 이상 |
| Medium Devices | Tablets | 1024px 이하 |
| Small Devices | Tablets + Phones | 768px 이하 |
