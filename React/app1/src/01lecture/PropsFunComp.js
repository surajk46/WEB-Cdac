let PropsFunComp = (ps) => {
    return (
        <div>
        <h1> Welcome </h1>
        <ol>
            {
                ps.names.map(v => {return <li key={v}>{v}</li>})
            }
        </ol>
        <p> Age : {ps.age} </p>
        </div>
    )

}

PropsFunComp.defaultProps = {
    names:["XXX","YYY","ZZZZ"],
    age:32
}

export default PropsFunComp;