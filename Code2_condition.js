let nation = prompt(" Where are you from ? Type M for Myanmar, K for Korea, Jp for Japan and N for Other " ,' ');
switch(nation ) {
  case 'M':
    alert( 'Mingalar par' );
    break;
  case 'K':
    alert( 'Annyeong haseyo' );
    break;
  case 'Jp':
    alert( 'Konnichiwa' );
    break;
case 'N':
    alert( 'Hello' );
    break;
  default:
    alert( "Please type your nation." );
}