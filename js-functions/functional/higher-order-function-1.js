function run(fn) {
    return `O resultado é: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(function () {
    console.log('run!!')
})

const result = run(Math.random)
console.log(result)