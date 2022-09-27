import Navbar from '../../Components/Navbar';
import FinalOrder from '../../Components/FinalOrder';
import { CheckoutDiv } from './styles';
import AddressDetails from '../../Components/AddressDetails';

function Checkout() {
  return (
    <>
      <Navbar />
      <CheckoutDiv>
        <FinalOrder />
        <AddressDetails />
      </CheckoutDiv>
    </>
  );
}

export default Checkout;
