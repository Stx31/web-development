export default function listpicker ({value}){
    const randIdx = Math.floor(Math.random()* value.lenght);
    const randElement = values[randIdx];
    return(
        <div>
            <p>lista de values:{values}</p>
            <p> random elemnets us :{randElement}</p>
        </div>
    )
}