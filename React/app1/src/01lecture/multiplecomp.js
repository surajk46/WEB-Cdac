import pic from '../Jellyfish.jpg'

function One() {
    let nm = "Bakul"
    let age = 30;
    return (
        <div>
            <h1> Welcome {nm.toUpperCase()} </h1>
            <p> Age : {age>18?"Valid":"Invalid"} </p>
        </div>
    )
}

let Two = function() {
    let w = 200;
    let h = 200;
    return (
        <div>
            <img src={pic} width={w} height={h} />
        </div>
    )
}

let Three = () => {
    var cdate = new Date();
    var arr = ["Jan","Feb","Mar","Apr","May","Jun"]
    return (
        <div>
            <p> Date : {cdate.getDate()+" "+arr[cdate.getMonth()]+" "+cdate.getFullYear()}</p>
            <ul>
                {
                    arr.map(v => {return <li key={v}> {v} </li>})
                }
            </ul>
        </div>
    )
}

export {One, Two, Three}