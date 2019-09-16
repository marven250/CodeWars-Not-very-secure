function alphanumeric(string) {
    let reg = /^[0-9a-zA-Z]+$/
    //let reg1 = /^\w+$/

    if (reg.test(string)) {
        return true
    }
    return false
}