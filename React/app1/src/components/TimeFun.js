
var hh,mm,ss;


function timeSpan()
{
    hh=new Date().getHours();
    mm=new Date().getMinutes();
    ss=new Date().getSeconds();
   // setInterval(timeSpan(),10000);
}

function TimeFun()
{
    return(
        <div onLoad={timeSpan()}>
            <p>Time={hh<=9?"0"+hh:hh}:{mm<=9?'0'+mm:mm}:{ss<=9?"0"+ss:ss}</p>
        </div>
    )
}
export default TimeFun;