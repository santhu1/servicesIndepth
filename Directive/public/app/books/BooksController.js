(function () {
    angular.module('app')
        .controller('BookController',['books','dataService','logger','badgeService',BookController]);
    function BookController(books,dataService,logger,badgeService){
        var vm = this; //controller as
        vm.appName = books.appName;
        vm.allBooks = dataService.getAllBooks();
        vm.allReaders = dataService.getAllReaders();
        vm.getBadge = badgeService.retrieveBadge;
        console.log(vm.getBadge);
        logger.output('BooksController has  been created. ')
    }

}());