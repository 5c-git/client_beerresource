import './RequestProductProvider.scss';
import ReactDOM from 'react-dom';
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

  ReactDOM.render(<RequestProductProvider />, requestProduct);
}
