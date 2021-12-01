"use strict";

function amountValue() {
  var amountRange = document.getElementById('amountRange').value + " руб.";
  var amountText = document.getElementById('amountText');
  amountText.value = amountRange;
}

function dayValue() {
  var dayRange = document.getElementById('dayRange').value + " дней";
  var dayText = document.getElementById('dayText');
  dayText.value = dayRange;
} // let bankItems = document.querySelectorAll('[data-bank]')
// bankItems.forEach(item => {
//     if(item.dataset.present === '8.9')
//     {
//         console.log(item)
//     }
// })


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 16,
    loop: true,
    autoWidth: true,
    items: 3,
    nav: true,
    navText: ["<div class='my-prev-btn'><i class='fas fa-chevron-left'></i></div>", "<div class='my-next-btn'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
      480: {
        items: 1
      }
    }
  });
});
"use strict";

console.log('maxgraph');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
