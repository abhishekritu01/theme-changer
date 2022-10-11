// console.log(window.localStorage);
// window.localStorage



// how to set and get element in console
// localStorage.setItem('theme','dark')
// const theme = localStorage.getItem('theme');
// console.log(theme);


/// remove   from localStorage
// localStorage.setItem('theme','dark')
// localStorage.setItem('font','bold')
// localStorage.removeItem('font');

// //localStorage.clear();// remove all item
// const theme = localStorage.getItem('theme');
// console.log(theme);


// const userSettings = {
//     theme: 'dark',
//     font: 'light',
//     score: 100
// }

// const settingString = JSON.stringify(userSettings);           // convert object into string

// localStorage.setItem('userSettings', settingString);         // key && value

// const uSetting = JSON.parse(localStorage.getItem('userSettings'));   // it convert srting into object  && JSON.parse it convert string into object

// console.log(uSetting.theme);      // print in from object 



// where to use cart 
// cart
// user settings
// filters
// form data
// score

// note --> not store confedicial data like api password

// project 
const themeSelector = document.querySelector('#themeSelector');

const theme =localStorage.getItem('theme');
changetheme(theme);


themeSelector.addEventListener('change', (e) => {
    // console.log(e.target.value);
    localStorage.setItem('theme', e.target.value);         //store in localstorage
    changetheme(e.target.value);
})

function changetheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#222';
    } else if (theme === 'light') {
        document.body.style.backgroundColor = '#e5e5e5';
    } else {
        document.body.style.backgroundColor = 'fff';
    }
}

// storageEvent 
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        // console.log(e);
        changetheme(e.newValue);
        themeSelector.value = e.newValue;
    }
});
//error handling
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log('Yeppe!! working.');
}
else {
    // Too bad, no localStorage for us
    console.log('OOPS!! Not working.');
}