const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.images');


let num = 0;

next.addEventListener("click", () => {
    if (++num < 4) {
        images.style.transform = `translateX(-${num * 100}%)`;
        console.log(num);
        // num++;


    }
    else {
        num = 0;
        images.style.transform = `translateX(-${num * 100}%)`;
        console.log(num);
        // num++;


    }
})
previous.addEventListener("click", () => {
    if (num > 0) {
        images.style.transform = `translateX(-${(num - 1) * 100}%)`;
        num--;
        console.log(num);
    }
    else {
        num = 3;
        images.style.transform = `translateX(-${num * 100}%)`;
        console.log(num);
        // num++;
        // console.log(num);

    }
})

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const range = document.querySelector('.num');

const range_add = document.querySelector('.range_add');

const number = document.querySelector('.number');

const result = document.querySelector('.result');

console.log(range);
let range_num = 0;
let r=125;
// plus.addEventListener("click",() => {
//     range_num++;
//     range.innerHTML =  range_num;
//     console.log(range_num);

// })

const nec = () => {
    range_num++;
    range.innerHTML = range_num;
    console.log(range_num);

    range_add.innerHTML = range_num;
    number.innerHTML = range_num;
    range_add.style.display = "block";
    // cart_empty.classList.add("hide");
    // cart_add.classList.add("hide");
    result.innerHTML = `<b style="color:black;">$${(r * range_num).toFixed(2)}</b>`;
}

plus.addEventListener("click", nec)

minus.addEventListener("click", () => {
    if (range_num > 0) {
        range_num--;
        range.innerHTML = range_num;
        range_add.innerHTML = range_num;
        number.innerHTML = range_num; 
        // cart_empty.classList.add("hide");
        // cart_add.classList.add("hide");
        result.innerHTML = `<b style="color:black;">$${(r * range_num).toFixed(2)}</b>`;
        if (range_num == 0) {
            range_add.style.display = "none";
            
        }
    }
    else {

        range_num = 0;
        range.innerHTML = range_num;
        number.innerHTML = range_num;

    }
    console.log(range_num);
})

const cart_logo = document.querySelector('.cart_logo');
const addtocart = document.querySelector('.addtocart');


const cart_empty = document.querySelector('.cart_empty');
const cart_add = document.querySelector('.cart_add');

let change = () => {
    
    if (range_num == 0) {
        console.log('hello');
        cart_empty.classList.toggle("hide");
        cart_add.classList.add("hide");
        console.log(range_num)
    }
    else {
        
        cart_add.classList.toggle("hide");
        cart_empty.classList.add("hide");
        console.log(range_num)
    }
}


cart_logo.addEventListener('click', change)

addtocart.addEventListener('click', change)


const delete01 = document.querySelector('.delete');

delete01.addEventListener('click', () => {
    range_num=0;
    cart_add.classList.add("hide");
    cart_empty.classList.remove("hide");
    console.log('hey')
    range.innerHTML = range_num;
    range_add.style.display = "none";
})

// const images1 = document.querySelectorAll('.images img');
// console.log(images1[0]);

const thumb_images = document.querySelectorAll('.img-thumbnail img');

// const mainImage = images1[0];
// console.log(mainImage);

thumb_images.forEach((img, index) => {
    img.addEventListener('click', () =>{
        // if (index>0) {
        //     images1[0].src = images1[index].src;
        //     console.log(images1[0]);
        // } else {
        //     images1[0].src ="./images/image-product-1.jpg";
        // }
        images.style.transform = `translateX(-${index * 100}%)`;
        console.log(index);
        console.log(num);
        num=index;
        console.log(num);
    })
    
})




