import {useState} from 'react'

export default function GeneralInfo({data, setData}) {
    const [editMode, setEditMode] = useState(true);

    function handleCharge(e){
        setData({...data, [e.target.name]: e.target.value});
    }
    return(
        <div className="card">
            <h2>General Information</h2>
            {editMode ? (
                <>
                    <input 
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleCharge}
                    />
                    <input 
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleCharge}
                    />
                    <input 
                        name="phone"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={handleCharge}
                    />
                    <button onClick={() => setEditMode(false)}>Save</button>
                </>
            ) : (
                <>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
            )}
        </div>
    )
}