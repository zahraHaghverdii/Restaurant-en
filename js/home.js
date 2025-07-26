var $ = document;

var spanShow = $.getElementById('span-show')
var spanRemove = $.getElementById('span-remove')
var headerButton = $.getElementById('header-button')

var galerySnack = $.querySelector('.galery-snack')
var galearyFood = $.querySelector('.galeary-Food')
var galeryBeverage = $.querySelector('.galery-Beverage')
var Food = $.getElementById('Food')
var Snack = $.getElementById('Snack')
var Beverage = $.getElementById('Beverage')



spanShow.addEventListener('click' , () => {
    spanShow.style.display = "none";
    spanRemove.style.display = "block";
    headerButton.style.display = "block";
})
spanRemove.addEventListener('click' , () => {
    headerButton.style.display = "none";
    spanRemove.style.display = "none";
    spanShow.style.display = "block";
})


//galery 

Food.addEventListener('click' , () => {
    galearyFood.style.display = "block";
    galerySnack.style.display = "none";
    galeryBeverage.style.display = "none";

    Food.style.backgroundColor = "#FFBA00";
    Snack.style.backgroundColor = "#171717";
    Beverage.style.backgroundColor = "#171717";
})
Snack.addEventListener('click' , () => {
    galerySnack.style.display = "block";
    galearyFood.style.display = "none";
    galeryBeverage.style.display = "none";

    Food.style.backgroundColor = "#171717";
    Beverage.style.backgroundColor = "#171717";
    Snack.style.backgroundColor = "#FFBA00";
})
Beverage.addEventListener('click' , () => {
    galerySnack.style.display = "none";
    galearyFood.style.display = "none";
    galeryBeverage.style.display = "block";

    Food.style.backgroundColor = "#171717";
    Snack.style.backgroundColor = "#171717";
    Beverage.style.backgroundColor = "#FFBA00";
})




// modal img
var imags = $.querySelectorAll('.imags')
var clearModal = $.getElementById('clear-modal')


imags.forEach(img => {
    img.addEventListener('click' , () => {
        var valuImg = img.dataset.name;
        // console.log(valuImg);
        for (let i = 0; i < imags.length; i++) {
            if(imags[i].nextElementSibling.dataset.name == valuImg){
                imags[i].nextElementSibling.style.display = 'block';
            } else{
                imags[i].nextElementSibling.style.display = 'none';
            }
            
            clearModal.addEventListener('click' , () => {
                imags[i].nextElementSibling.style.display = 'none';
            })
        }
   
    })

})