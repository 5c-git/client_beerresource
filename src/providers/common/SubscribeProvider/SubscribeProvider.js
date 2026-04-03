import './SubscribeProvider.scss';
import ReactDOM from 'react-dom';
import Subscribe from '../../../react/Subscribe/Subscribe';
import { sendSubscribe } from '../../../api/SubscribeApi';

const subscribeProvider = document.querySelector('#SubscribeProvider');

if (subscribeProvider) {
  const { id } = subscribeProvider.dataset;
  const SubscribeProvider = () => (
    <div className="container">
      <Subscribe submitHandler={sendSubscribe} id={id} />
    </div>
  );

  ReactDOM.render(<SubscribeProvider />, subscribeProvider);
}
