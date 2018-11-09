$(document).ready(() => {
  $(".legumes").hide();
$("#aboutLegumes").on('click', () => {
  $(".legumes").toggle();
});
$(".snacks").hide();
$("#aboutSnacks").on('click', () => {
$(".snacks").toggle();
});

$(".bowl").hide();
$("#aboutVegetables").on('click', () => {
$(".bowl").toggle();
});

$(".meal").hide();
$("#aboutMeal").on('click', () => {
$(".meal").toggle();
});

});
