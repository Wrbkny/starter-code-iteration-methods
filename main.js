// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//Kata 1: Use the .filter() method
//Filter the users array to show only the users with an isActive property of true.

const Kata1Active = users.filter(user => user.isActive)

printKata(1, Kata1Active)

//Kata 2: Use the .map() method
//Map over the users array to show only the email addresses of the users.

const Kata2Emails = users.map(user => user.email)

printKata(2, Kata2Emails)

//Kata 3: Use the .some() method
//Check whether at least one user in the users array has a company property of "OVATION".

const Kata3Ovation = users.some(user => any = "OVATION")

printKata(3, Kata3Ovation)

//Kata 4: Use the .find() method
//Find the first user in the array over the age of 38.

const Kata4Over38 = users.find(user => user.age > 38 )

printKata(4, Kata4Over38)

//Kata 5: Use the .filter() and .find() methods
//Find the first user in the array over the age of 38 who is active.

const Kata5Over38active = 
users.filter(user => user.isActive).find(user => user.age > 38 )

printKata(5, Kata5Over38active)

//Kata 6: Use the .filter() and .map() methods
//Show the balance of every user in the array from the "ZENCO" company.

const Kata6 =
users.filter(user => user.company = "ZENCO" ).map(user => user.balance) 

printKata(6, Kata6)


