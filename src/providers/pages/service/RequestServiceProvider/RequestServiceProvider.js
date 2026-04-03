import './RequestServiceProvider.scss';
import ReactDOM from 'react-dom';
import RequestService from '../../../../react/RequestService/RequestService';
import { sendRequestService } from '../../../../api/RequestServiceApi';

const requestService = document.querySelector('#RequestServiceProvider');

if (requestService) {
  const { id } = requestService.dataset;
  const RequestServiceProvider = () => (
    <div className="container">
      <RequestService submitHandler={sendRequestService} id={id} />
    </div>
  );

  ReactDOM.render(<RequestServiceProvider />, requestService);
}
