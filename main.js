Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
  width:350,
  height:300,
  Image_format:"png",
  png_quality:90
});
function takeSnapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="imagemcapiturada" src="'+data_uri+'"/>';
    });
}
console.log("versãoml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-PTrgRfEs/model.json",modelLoaded);
function modelLoaded(){
  console.log("modelo carregado");
}
function check(){
  img=document.getElementById("imagemcapiturada");
  classifier.classify(img,gotResult);
}
function gotResult(error,results){
  if (error){
    console.error(error);

  }else{
    console.log(results);
    document.getElementById("resultObjectName").innerHTML=results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence;

  }
}