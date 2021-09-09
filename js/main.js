var priceTicket = 150; //Dollars
var priceHotel = 250; //Dollars
var priceTravel = 120; //Euros
priceTicket *= 9433.34; //So'm
priceHotel *= 9433.34; //So'm
priceTravel *= 10354.03; //So'm
var priceFullTravel = priceTicket + priceHotel + priceTravel;
alert(
  `Hello bro sz sayohatga ketishingiz uchun qancha pul kerakligini bilib oling ✈️`
);
var moneyAlisher = prompt(`Bro how much many`);
if (moneyAlisher >= priceFullTravel) alert(`Xayr bro yo'ldasiz 👋`);
else alert(`Bro birozgina sabr qilishingizga tog'ri keladi 🙃`);
