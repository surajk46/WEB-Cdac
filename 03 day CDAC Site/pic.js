arrPic=["img/topper.jpeg","img/model.jpeg","img/chetanSir.jpeg","img/theShivamSharma.jpeg"];
arrName=["Nikhil","Bhairav","Chetan Sir","The Shivam Sharma"];
arrInfo=["Selected in Deutsche Bank","Selected in Amazon","Selected in FaceBook(META)","Selected in Apple"];
index=-1;
function getNext()
{
    if(index==arrPic.length-1)
        index=0;
    else
        index++;
    document.getElementById("pic").src=arrPic[index];
    document.getElementById("nm").innerHTML=arrName[index]+" <br/>  PG-DAC(Mar23)";
    document.getElementById("info").innerHTML=arrInfo[index];
}
function getPrev()
{
    if(index<=0)
        index=arrPic.length-1;
    else
        index--;
    document.getElementById("pic").src=arrPic[index];
    document.getElementById("nm").innerHTML=arrName[index];
    document.getElementById("info").innerHTML=arrInfo[index];
    
}

function refresh()
{
    getNext();
    setTimeout(refresh,2000);
}