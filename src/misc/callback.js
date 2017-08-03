        function iExecuteYourCallback(setUnreadCount) {
           itemToCount = setUnreadCount(0);
        }
        iExecuteYourCallback(function() {
            console.log('Im a callback function!', setUnreadCount(0));
        });