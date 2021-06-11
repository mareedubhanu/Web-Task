import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.email) props.updateUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} />
            <label>Phone Number</label>
            <input className="u-full-width" type="text" value={user.phone} name="phone" onChange={handleChange} />
            <label>Gender</label>
            <input className="u-full-width" type="text" value={user.gender} name="gender" onChange={handleChange} />

            <label>State</label>
            <input className="u-full-width" type="text" value={user.state} name="state" onChange={handleChange} />

            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;