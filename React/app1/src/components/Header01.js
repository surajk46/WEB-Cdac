import './Header01.css';
import pic from '../Untitled1.png';
import TimeFun from './TimeFun';
function Header01(){
    return(
        <div id="a">
            <img src={pic} alt="img" />
            <h1>Welcome</h1>
            <TimeFun />
        </div>
    )
}

export default Header01;