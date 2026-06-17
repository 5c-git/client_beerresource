import './RequestProductProvider.scss';
import { createRoot } from "react-dom/client";
import RequestProduct from '../../../../react/RequestProduct/RequestProduct';
import { sendRequestProduct } from '../../../../api/RequestProductApi';

const requestProduct = document.querySelector('#RequestProductProvider');
if (requestProduct) {
  const { id } = requestProduct.dataset;
  const RequestProductProvider = () => (
    <div className="container">
      <RequestProduct submitHandler={sendRequestProduct} id={id} />
    </div>
  );

  createRoot(requestProduct).render(<RequestProductProvider />);
}
