import './mystyle.css'
export default function CompStyling () {

    const styleObj = {
        textDecoration: "underline",
        letterSpacing:"3px"
    }
    return (
        <div>
            <p style={{color:"red", backgroundColor:"yellow"}}>
                Styling using iniline style 
            </p>
            <p style={styleObj}>
                Styling using styling object
            </p>
            <p className="content" >
                styling using external css
            </p>
            <p className="bg-dark text-white"> 
                Styling using bootstrap
            </p>
            <button class="btn btn-primary">
                Click Me
            </button>
        </div>
    )

}