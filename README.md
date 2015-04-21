# DEPRECIATED: PLEASE USE [times/angular-tabletop](http://www.github.com/times/angular-tabletop) instead!

# TabletopService — an AngularJS service for Tabletop.js

## Usage:

```
angular
  .module('anAngularApp', [
    ...
    'Tabletop'
  ])
  .controller('MainCtrl', ['TabletopService', function (TabletopService, $scope) {
    TabletopService.init(<YOUR GOOGLE SHEET KEY HERE:STRING>, <USE SIMPLESHEET FORMAT:BOOLEAN>).then(function(){
      console.dir(TabletopService.data);
    });
  }]);
```

I'm not at all sure how this is any better than the default implementation, TBH.
