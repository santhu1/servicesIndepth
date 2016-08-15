(function () {

    var app = angular.module('app',[]);
    app.provider('books',['constants',function(constants){
        this.$get=function(){
            var appName = constants.APP_TITLE;
            var appDesc = constants.APP_DESCRIPTION;

            var version = constants.APP_VERSION;

            if(includeVersionInTitle){
                appName += version;
            }


            return{
                appName:appName,
                appDesc:appDesc
            };
        };
        var includeVersionInTitle= false;
        this.setIncludeVersionInTitle = function (value){
            includeVersionInTitle = value;
        }
    }])

    app.config(['booksProvider','constants','dataServiceProvider',function(booksProvider,constants,dataServiceProvider){
        booksProvider.setIncludeVersionInTitle(true);
        console.log("title from constants service: " + constants.APP_TITLE)
        /*console.log(dataServiceProvider)*/
    }])


}())

/* $provide.provider('books',function(){
 this.$get=function(){
 var appName = 'Book Logger';
 var appDesc = 'Track which book you read';
 return{
 appName:appName,
 appDesc:appDesc
 }
 }
 })*/





/*app.provider('books',function(){
    this.$get=function(){
        var appName = 'Book Logger ';
        var appDesc = 'Track which book you read';

        var version = 1.0;

        if(includeVersionInTitle){
            appName += version;
        }


        return{
            appName:appName,
            appDesc:appDesc
        };
    };
    var includeVersionInTitle= false;
    this.setIncludeVersionInTitle = function (value){
        includeVersionInTitle = value;
    }
})

app.config(function(booksProvider){
    booksProvider.setIncludeVersionInTitle(true);
})*/





