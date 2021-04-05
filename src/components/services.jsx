import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

const Service = styled.div`
  box-sizing: border-box;

  .devu-row:after {
    content: "";
    display: table;
    clear: both;
  }

.row:after {
  content: "";
  display: table;
  clear: both;
}

.devu-row{
  margin: 0 -5px;
}

.card {
  width: 50%;
  border-radius: 5px;
  margin: 1vw auto;
padding: 30px 10px;
}
.card-body p{
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.card-body{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 3%;
}
@media screen and (max-width: 800px) {
  .card {
    width: 80%;
    margin: 2vw auto;
    display: block;
  }
}
`

const Services = () => {
    return (
      <Service>
        <Navbar />
<div class="devu-row">
<div class="card">

  <div class="card-body">
    <h3>Taxi Services</h3>
    <p>At STS, we believe in making your rental experience as convenient as possible. If you are looking for a reliable chauffeur car service, you can avail our excellent car rental solutions at reasonable rates</p>
 </div>
</div>

<div class="card">
  <div class="card-body">
      <h3>Oustation PickUp and Drops</h3>
    <p>We provide outstation trips at various tourist destinations or your desired locations with an option of round trip and one way trip</p>
</div>
</div>
</div>
<div class="row">
<div class="card">

  <div class="card-body">
          <h3>Tour Packages</h3>
  <p>We organize special tours like the north Goa & south Goa sight seeing, waterfall, spice plantation, river cruises, Dolphin trips</p>

</div>
</div>

<div class="card">

  <div class="card-body">
          <h3>Self Driven Cars</h3>
  <p>Self drive cars is nothing but renting and driving a car yourself, rather than being driven by someone else. STS offer wide range of cars, Move on the roads with a hired car of your choice, driving at your ease and explore Goa</p>

</div>
</div>


<div class="card">
  <div class="card-body">
        <h3>Wedding Cars</h3>
  <p>Self drive cars is nothing but renting and driving a car yourself, rather than being driven by someone else. STS offer wide range of cars, Move on the roads with a hired car of your choice, driving at your ease and explore Goa</p>
    {/* <!-- <button type="button" class="btn btn-info btn-lg"> Enquire Now</button> --> */}
</div>
</div>
</div>
<Footer />
</Service>
    );
}

export default Services;