let userForm = document.querySelector('.form');

let inputUserName = document.querySelector('.firstnameinput');

let inputUserLastName = document.querySelector('.lastnameinput');

let inputUserAge = document.querySelector('.inputuserage');

let inputUserJob = document.querySelector('.userjobinput');

let inputUserSport = document.querySelector('.usersportinput');

let inputUserPostalCode = document.querySelector('.userpostalcodeinput');

let inputUserAddress = document.querySelector('.useraddressinput');

userForm.addEventListener("submit" , (e) => {
    
    e.preventDefault();
    
    let address = inputUserAddress.value;

    let userAddress = inputUserAddress.value.toLowerCase();

    let user = {
        firstName : e.target.firstName.value,
        lastName : e.target.lastName.value,
        userAge : e.target.userAge.value,
        userJob : e.target.userJob.value,
        userSport : e.target.userSport.value,
        userPostalCode : e.target.userPostalCode.value,
        userAddress : e.target.userAddress.value,
        userAddress : userAddress
    }

    if (inputUserName.value.trim().length <= 2) {
        console.log('اسمی که وارد کردید 2 حرف یا کمتر از 2 حرف دارد ، لطفا اسمی وارد کنید که 3 حرف یا بیشتر داشته باشد');
        return
    }

    else if (inputUserLastName.value.trim().length < 5) {
        console.log('فامیلی ای که وارد کردید کمتر از 5 حرف دارد ، لطفا فامیلی ای وارد کنید که 5 حرف یا بیشتر داشته باشد');
        return
    }

    else if (inputUserAge.value < 10) {
        console.log('متاسفانه سن شما برای ثبت اطلاعات کم است');
        return
    }

    else if (inputUserJob.value.trim().length < 4) {
        console.log('متاسفانه شغلی که وارد کردید کمتر از 4 حرف دارد ، لطفا شغلی را وارد کنید که 4 حرف یا بیشتر داشته باشد');
        return
    }

    else if (inputUserSport.value.trim().length < 4) {
        console.log('متاسفانه ورزشی که وارد کردید کمتر از 4 حرف دارد ، لطفا ورزشی وارد کنید که 4 حرف یا بیشتر داشته باشد');
        return
    }

    else if (inputUserPostalCode.value.trim().length !== 10) {
        console.log('کد پستی نمیتواند کمتر یا بیشتر از 10 رقم باشد');
        return
    }

    else if (address !== address.trim() || inputUserAddress.value.length < 3) {
        console.log('آدرس را اشتباه وارد کردید ، لطفا دوباره آدرس را وارد کنید');
        return
    }

    console.log("your name is : " + user.firstName);

    console.log("your lastname is : " + user.lastName);

    console.log("your age is : " + user.userAge);

    console.log("your job is : " + user.userJob);

    console.log("your faiverit sport is : " + user.userSport);

    console.log("your postal code is : " + user.userPostalCode);
    
    console.log("your address is : " + user.userAddress);

    if (userAddress === 'tehran') {
        console.log('به دلیل اینکه شما در تهران هستید بسته شما زود تر به دستتان میرسد');
    }
});