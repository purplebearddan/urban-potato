const myAge = 1

if (!(myAge <= 0)) {
    if (myAge >= 18) {
        console.log('you are old enough to vote!')
    } else {
        console.log('You are not old enough to vote!')
    }
} else {
    console.log('Pick a real age!')
}

const myName = 'Jerry'

if (myName === 'Dan') {
    console.log(`Hello, ${myName}`)
} else {
    console.log(`I don't know of any "${myName}"`)
}

const user = {
    username: 'mowglixx',
    loggedIn: true,
    email: 'daniel_m@purplebeard.co.uk',
}

if (user.loggedIn) {
    console.log(`Hello, ${user.username}`)
}

// Falsy Values
// let x = ''
// let x = 0
// let x = false
// let x = null
// let x = NaN

// truthy values
// let x = ' '
// let x = 1
// let x = true

if ([]) {
    console.log('truthy')
} else {
    console.log('falsy')
}

console.log(5 < 6)

// Modulus Operator

const modDemo = 3 % 2

console.log(modDemo)
