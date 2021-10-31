var images = ["nazia.jpeg", "maryam.jpeg", "isa.jpeg", "faisal.jpeg"];
var names = ["Mom", "Maryam", "Me", "Dad"];
var i = 0;

function ok(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;  
  }
}