// Timestamp 2 DateTime Fr
function getMyDateTime() {

    // if (!d) {
        let d       =   new Date();
    // }

    const local     =   'fr-FR';
    const options   =   {
                            weekday :   "long",
                            year    :   "numeric",
                            month   :   "long",
                            day     :   "numeric"
                        };

    const myDate    =   d.toLocaleDateString(local, options)
                            .toLowerCase()
                            .split(' ')
                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ');
    const myHour    =   d.toLocaleTimeString(local);

    return { 'myDate' : myDate, 'myHour' : myHour };

}

exports.getMyDateTime = getMyDateTime;