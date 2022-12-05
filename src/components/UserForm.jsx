import React from "react"

const UserForm = ({data, updateFieldHandler})=> {
    return(
        <div>
            <div className="form_control">
                <label htmlFor="name">Nome:</label>
                <input type='text' name='text' id='name' placeholder='Digite o seu nome: ' required value={data.name || ''} on onChange={(e) => {
                    updateFieldHandler("name", e.target.value )
                }}/>
                
            </div>

            <div className="form_control">
                <label htmlFor="email">Email:</label>
                <input type='email' name='email' id='email' placeholder='Digite o seu email: ' required
                 value={data.email || ''} on onChange={(e) => {
                    updateFieldHandler("email", e.target.value )
                }}/>
                
            </div>
        </div>
    )
}

export default UserForm