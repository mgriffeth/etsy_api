console.log(items);

var itemTitle;
var shopName;
var itemPrice;
var currencyCode;
var itemImage;
var item;


items.forEach(function(item){
  itemTitle = "<a class='titles'>"+ item.title +"</a>";
  console.log(itemTitle);
  shopName = "<a class='shops'>"+ item.Shop.shop_name +"</a>";
  console.log(shopName);
  itemPrice = "<a class='prices'>"+"$"+(item.price)+"</a>";
  console.log(itemPrice);
  currencyCode = "<a class='currency'>"+item.currency_code+"</p>";
  console.log(currencyCode);
  itemImage = "<img src='" + item.Images[0].url_170x135 +"'/img>";
  console.log(itemImage);

  item = "<li>" +itemImage+ itemTitle + shopName + itemPrice + currencyCode +"</li>";
  $('.search_results').append(item);
});
