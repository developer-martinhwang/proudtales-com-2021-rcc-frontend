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
 * - Feb 10, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : modified passwordCheck(), passwordConfirmPasswordMatch()
 *     added emailCheck(), nameCheck()
 */
// authentication
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
export const passwordCheck = (password) => {
    let passwordErrors = [];
    const passwordLength = password.length < 8 ;
    // Regex
    const specialCharacterRegex = /^(.*[-!$%^&*()_+|~=`{}[:;<>?,.@#])/;
    const upperCaseRegex = /^(.*[A-Z])/;
    if(passwordLength) {
        passwordErrors.push("should be more than 8, \n");
    }
    if(!specialCharacterRegex.test(password)) {
        passwordErrors.push("should contain at least one special character, \n");
    }
    if(!upperCaseRegex.test(password)) {
        passwordErrors.push("should contain at least one uppercase letter, \n");
    }
    return passwordErrors;
}
// match password with confirmPassword
export const passwordConfirmPasswordMatch = (password, confirmPassword) => {
    let confrimPasswordError = "";
    if(password !== confirmPassword){
        confrimPasswordError = "Password do not match with confirmPassword";
    }
    return confrimPasswordError;
}
// check email
export const emailCheck = (email) => {
    let emailError = "";
    // Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        emailError = "Email should be valid, e.g., developer.martinhwang@gmail.com"
    }
    return emailError;
}
// check full name 
export const nameCheck = (name) => {
    let nameError = ""
    // name Regex
    const nameRegex = /^[0-9a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        nameError = "Name should be valid, e.g., MartinHwang" 
    }
    return nameError;
}