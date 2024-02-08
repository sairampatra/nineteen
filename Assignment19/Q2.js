function bool(regex, string) {

    return regex.test(string)
}

console.log(bool(/(sai)/g,'sai ram patra '))
console.log(bool(/^\d+$/,'123'))
console.log(bool(/^[a-zA-Z]+$/,'sairampatraASD'))
console.log(bool(/^[a-z0-9]{4,}@g(oogle)?mail\.com$/i
,'saip01798@gmail.com '))