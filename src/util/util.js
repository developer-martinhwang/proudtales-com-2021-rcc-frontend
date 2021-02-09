/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/forms/Signup.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 6, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Feb 8, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : completed getLastWordOfUrl function
 */

 // return the value of end index in an array of substrings
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