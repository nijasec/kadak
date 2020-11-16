function doinject(){

var image;

 
image=$('img').attr('src');
Tesseract.recognize(
  image,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
  var res=text.split("-");
  var len= res.length;
  if(len>19)
     {
     $('#tbcno').val(res[0]);
       $('#name').val(res[1]);
       $('#email').val(res[2]);
       $('#mobile').val(res[3]);
       $('#gender').val(res[4]);
       $('#licenseno').val(res[5]);
       $('#girno').val(res[6]);
       $('#panno').val(res[7]);
       $('#haddress').val(res[8]);
       $('#hcity').val(res[9]);
       $('#hpin').val(res[10]);
       $('#hstate').val(res[11]);
       $('#oaddress').val(res[12]);
       $('#ocity').val(res[13]);
       $('#opin').val(res[14]);
        $('#lal').val(res[15]);
       $('#mrnno').val(res[16]);
        $('#af').val(res[17]);
         $('#nri').val(res[18]);
        $('#cp').val(res[19]);
      
       
       
       
     
     }
  
 // $('body').append(res[0]);
});
}
