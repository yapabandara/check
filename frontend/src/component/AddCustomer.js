
import React, {useState} from "react";
import "./styles.css";
import axios from "axios";


export default function AddCustomer() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDOB] = useState("");
    const [nic, setNic] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [landOwnerName, setLandOwnerName] = useState("");
    const [deedNo, setDeedNo] = useState("");
    const [feildSize, setSize] = useState("");
    const [MPACode, setMpaCode] = useState("");


    function sendData(e) {

        e.preventDefault();
        
        const newCustomer = {
            fname,
            lname,
            dob,
            nic,
            gender,
            address,
            phone,
            landOwnerName,
            deedNo,
            feildSize,
            MPACode
        }

        axios.post("http://localhost:8070/customer/add", newCustomer).then(() => {

            alert("Add student successfully")

        }).catch((err) => {

            alert(err)
        })
        
    }


    return (
     
    <div class="container">
        <center><h2>Register</h2></center><br/>
        <form method="POST" onSubmit={sendData}>
            <div class="section">
                <h3>Personal Details</h3>
                
                <div className="input-group">
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    title="Enter only letters"
                    required
                    onChange={(e) => {
                        const input = e.target.value;
                        if (/^[A-Za-z]*$/.test(input)) {
                            setFname(input);
                        }
                    }}
                    onKeyPress={(e) => {
                        const charCode = e.charCode;
                        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
                            e.preventDefault();
                        }
                    }}
                />
                </div>

                <div className="input-group">
                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    title="Enter only letters"
                    required
                    onChange={(e) => {
                        const input = e.target.value;
                        if (/^[A-Za-z]*$/.test(input)) {
                            setLname(input);
                        }
                    }}
                    onKeyPress={(e) => {
                        const charCode = e.charCode;
                        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
                            e.preventDefault();
                        }
                    }}
                />
                </div>

                <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    min="1950-01-01"
                    max={new Date().toISOString().split('T')[0]} // Set the maximum value to the current date
                    onChange={(e) => {
                        setDOB(e.target.value);
                    }}
                />
                </div>

                
                <div className="input-group">
                <label htmlFor="nic">NIC (13 characters)</label>
                <input
                    type="text"
                    id="nic"
                    name="nic"
                    pattern="^(?:\d{12}|\d{12}[Vv])$"
                    title="Enter exactly 12 numbers or 12 numbers followed by 'V'/'v'"
                    required
                    value={nic}
                    onChange={(e) => {
                         const input = e.target.value;
                         if (/^\d{0,12}[Vv]?$/.test(input)) {
                            setNic(input);
                        }
                    }}
                />
                </div>

                */
                <div class="input-group">
                    <label>Gender</label>
                    <label for="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male" onChange = {(e)=> {

                        setGender(e.target.value);

                    }} />
                    <label for="female">Female</label>
                    <input type="radio" id="female" name="gender" value="female" onChange = {(e)=> {

                        setGender(e.target.value);

                    }} />
                </div>
                <div class="input-group">
                    <label for="address">Address</label>
                    <textarea id="address" name="address" required onChange = {(e)=> {

                        setAddress(e.target.value);

                    }} >
                    </textarea>
                </div>
                
                <div className="input-group">
                <label htmlFor="phone">Phone (10 numbers)</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength="10"
                    title="Enter a number that starts with 0 and has 9 additional digits"
                    required
                    onKeyPress={(e) => {
                        const charCode = e.charCode;
                        const currentValue = e.target.value;
            
                        if (currentValue.length === 0 && charCode !== 48) { // 48 is the char code for '0'
                            e.preventDefault();
                        } else if (currentValue.length > 0 && (charCode < 48 || charCode > 57)) {
                            e.preventDefault();
                        }
                    }}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (/^[0-9]*$/.test(input) && input.length <= 10) {
                            setPhone(input);
                        }
                    }}
                />
            </div>
            </div>
            <div class="section">
            <h3>Field Details</h3>
                
            <div className="input-group">
            <label htmlFor="landOwnerName">Land Owner Name</label>
            <input
                type="text"
                id="landOwnerName"
                name="landOwnerName"
                required
                onKeyPress={(e) => {
                    const charCode = e.charCode;
                    if (
                        (charCode < 65 || charCode > 90) && // A-Z
                        (charCode < 97 || charCode > 122) && // a-z
                        charCode !== 32 // space
                    ) {
                    e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    const input = e.target.value;
                    if (/^[A-Za-z\s]*$/.test(input)) {
                    setLandOwnerName(input);
                    }
                }}
            />
            </div>


                <div class="input-group">
                    <label for="deedNo">Deed Number</label>
                    <input type="text" id="deedNo" name="deedNo" required onChange = {(e)=> {

                        setDeedNo(e.target.value);

                    }} />
                </div>
                
                <div className="input-group">
                <label htmlFor="fieldSize">Field Size</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    id="fieldSize"
                    name="fieldSize"
                    required
                    onKeyPress={(e) => {
                        const charCode = e.charCode;
                        if ((charCode < 48 || charCode > 57) && charCode !== 46) {
                            e.preventDefault();
                        }
                    }}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (/^[0-9]*\.?[0-9]*$/.test(input)) {
                            setSize(input);
                        }
                    }}
                />
                <span style={{ marginLeft: '5px' }}>acres</span>
                </div>
                </div>



                <div class="input-group">
                    <label for="mpaCode">MPA Code</label>
                    <input type="text" id="mpaCode" name="mpaCode" required onChange = {(e)=> {

                        setMpaCode(e.target.value);

                    }} />
                </div>
            </div>
            <div class="input-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>



    )
}

