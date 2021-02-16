/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/util/util.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 6, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Feb 8, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : completed getLastWordOfUrl function
 * - Feb 10, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated randomPicture()
 */

 // return the value of end index in an array of substrings
 // parameter: pass string as str, separator, number as limit
export const getLastWordOfUrl= (str, separator, limit) => {
    if(typeof str !== 'string'){
        return '';
    }
    else{
        let value = str.split(separator, limit);
        value = value[value.length-1];
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value;
    }
 }
 // return random picture
 // parameter: pass array as arr
export const randomPicture = (arr) => {
    return Math.floor(Math.random() * arr.length);
}
// check password
export const checkPassword = (password, confirmPassword) => {
    let passwordError = [];
    const passwordLength = password.length < 8 ;
    if(passwordLength) {
        passwordError.push("Password should be more than 8");
    }
    if(password !== confirmPassword){
        passwordError.push("Password do not match with confirmPassword");
    }
    return passwordError;
}
// check email
export const emailCheck = () => {
    let emailError = ""
    return emailError;
}
