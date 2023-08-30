const router = require("express").Router();
let Customer = require("../models/Customer");

router.route("/add").post((req,res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const dob = req.body.dob;
    const nic = req.body.nic;
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = req.body.phone; 

    const landOwnerName = req.body.landOwnerName
    const deedNo = req.body.deedNo;
    const feildSize = req.body.feildSize;
    const MPACode = req.body.MPACode;

    const newCustomer = new Customer({
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
    })

    newCustomer.save().then(()=>{

        res.json("Customer Registration Successful")

    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/fetch").get((req,res)=>{

    Customer.find().then((customers)=>{
        res.json(customers)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:cusid").put(async(req,res)=> {

    let customerId = req.params.cusid;
    const {fname, lname, dob, nic, gender, address, phone, landOwnerName, deedNo, feildSize, MPACode} = req.body;

    const updateCustomer = {
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

    const update = await Customer.findByIdAndUpdate(customerId, updateCustomer).then(()=> {

        res.status(200).send({status: "Customer Updated successfully"})

    }).catch((err)=> {

        console.log(err);
        res.status(500).send({status: "Error with updating data"});

    })  
})


router.route("/delete/:cusid").delete(async(req,res)=> {

    let customerId = req.params.cusid;

    await Customer.findByIdAndDelete(customerId).then(()=> {

        res.status(200).send({status: "Customer Deleted successfully"});

    }).catch((err)=> {

        console.log(err.message);
        res.status(500).send({status: "Error with delete customer", error: err.message});

    })
})


router.route("/get/:cusid").get(async(req,res)=> {

    let customerId = req.params.cusid;

    const cus = await Customer.findById(customerId).then((customer)=> {

        res.status(200).send({status: "Customer fetched", customer})

    }).catch((err)=> {

        console.log(err.message);
        res.status(500).send({status: "Error with customer", error: err.message});

    })
})

module.exports = router;