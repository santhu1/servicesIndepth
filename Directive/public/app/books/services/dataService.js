(function () {
    angular.module('app')
        .factory('dataService', dataService);
    dataService.$inject = ['logger'];
    function dataService(logger) {

        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };
        function getAllBooks()    {
            return [
                {
                    book_id: 1,
                    title: 'Harry Potter and the deathly Hallows',
                    author: 'J.K.Rowling',
                    year_published: 2000
                },
                {
                    book_id: 2,
                    title: 'The cat in the hat',
                    author: 'Dr.Seuss',
                    year_published: 1957
                },
                {
                    book_id: 3,
                    title: 'Encyclopedia Brown, Boy detective',
                    author: 'Dr.Seuss',
                    year_published: 1957
                }
            ]
        }

        /* get readers */
        function getAllReaders() {
            logger.output('Getting all the Readers. ')
            return [
                {
                    reader_id: 1,
                    name: 'Sandeep',
                    weeklyReadingGoal: 350,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: "Vikas",
                    weeklyReadingGoal: 650,
                    totalMinutesRead:2700
                },
                {
                    reader_id: 1,
                    name: 'Ramana',
                    weeklyReadingGoal: 900,
                    totalMinutesRead: 1500
                }
            ]
        }

    }

}());
