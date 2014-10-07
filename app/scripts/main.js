console.log(items);

var itemTitle;
var shopName;
var itemPrice;
var currencyCode;
var itemImage;
var item;


items.forEach(function(item){
  itemTitle = "<p class='titles'>"+ item.title +"</p>";
  console.log(itemTitle);
  shopName = "<p class='shops'>"+ item.Shop.shop_name +"</p>";
  console.log(shopName);
  itemPrice = "<p class='prices'>"+"$"+(item.price)+"</p>";
  console.log(itemPrice);
  currencyCode = "<p class='currency'>"+item.currency_code+"</p>";
  console.log(currencyCode);
  itemImage = "<img src='" + item.Images[0].url_170x135 +"'/img>";
  console.log(itemImage);

  item = "<li>" +itemImage+ itemTitle + shopName + itemPrice + currencyCode +"</li>";
  $('.search_results').append(item);
});
