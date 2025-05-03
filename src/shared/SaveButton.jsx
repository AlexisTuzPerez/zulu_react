/* eslint-disable react/prop-types */



function SaveButton({disabled} ) {


    return (

        <button className="crudButton saveButton" disabled={disabled} type="submit" id="save">Save</button>

    )
}

export default SaveButton