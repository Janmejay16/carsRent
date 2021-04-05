import React from "react";


function Bill(){
    return (
<div>
<section id="bill">
  <h2>Your Electronic Invoice</h2>
  <div className="classic card">
    <div className="card-body">
        <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-6">
  <img src="Bill.jpg" alt="invoice" width="400px" height="500px" /></div>

  <div className="vl"></div>
  <div className="col-lg-6 col-md-6 col-sm-6">
    <h3 style={{textAlign :"center"}}>Invoice</h3>
    <form className="BillPage" action="/Bill" method="post" autocomplete="off">
    <label className="name" for="fname" style={{fontWeight: "bold"}}> Name: </label>
<label className="FullName" for="Cname">Devanshi Patel</label>
<label className="email" for="cmail" style={{fontWeight: "bold"}}> Email: </label>
<label className="EmailId" for="customer">abc@gmail.com</label><br/>
<label className="name" for="fname" style={{fontWeight: "bold"}}> Phone Number: </label>
<label className="Number" for="cnum">123456789</label><br/>
<hr/>
<label className="model" for="ccar" style={{fontWeight: "bold"}}>Model of Car: </label>
<label className="model" for="ccar">Innova</label><br/>
<label className="timep" for="ccar" style={{fontWeight: "bold"}}>PickUp Time: </label>
<label className="timep" for="ccar">24th Staurday </label><br/>
<label className="timed" for="ccar" style={{fontWeight: "bold"}}>Drop Time: </label>
<label className="timed" for="ccar">25th Sunday </label>
</form>
<table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rent Per Day</td>
        <td>1000.00</td>
      </tr>
      <tr>
        <td>Security Deposit</td>
        <td>5000.00</td>
      </tr>
      <tr>
        <td>Service Charge</td>
        <td>1100.00</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>7100.00</td>
      </tr>
    </tbody>
  </table>

<h5>You have to pay Rs 7100.00</h5>
    </div>
    </div>
</div>
  </div>
</section>

</div>
    );
}

export default Bill;