import "./toggle.css"



const Toggle = () => {

    return (<>

        <div id="toggle_container">


            <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked />
            <label for="toggle-on" class="btn">Monthly</label>
            <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" />
            <label for="toggle-off" class="btn">Annually</label>
        </div>


    </>)
}

export default Toggle;