console.log("Message to developer")

function Alertmessage(){
    const Hi=()=>{alert("Message from javascript Alert!")}
    return <div><button onClick={Hi}>Click</button></div>

}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))