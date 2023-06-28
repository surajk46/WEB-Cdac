export default function Style03(){
    return(
        <div>
            <h1>
                hello h1
            </h1>
            
            <form action="">
            <table>
                <tr>
                   <td colspan="2"><input type="text" name="name" id="name" placeholder="Enter Your Name" list="names"/>
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="email" name="email" id="email" maxlength="15" placeholder="Enter Your Email"/></td>
                </tr>
                <tr>
                    <td><label for="bdate">Birth Date</label></td>
                    <td><input type="date" name="bdate" id="bdate"/></td>
                </tr>
                <tr>
                    <td><label for="btime">Birth Time</label></td>
                    <td><input type="time" name="btime" id="btime"/></td>
                </tr>
                <td><input type="submit" name="submit" id="submit"/></td>
                <td><input type="reset" name="reset" id="reset"/></td>
                </table>
            </form>
        
        
        </div>
    )
}