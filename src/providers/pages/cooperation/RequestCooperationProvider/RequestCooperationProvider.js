import './RequestCooperationProvider.scss';
import ReactDOM from 'react-dom';
import RequestCooperation from '../../../../react/RequestCooperation/RequestCooperation';
import { sendRequestCooperation } from '../../../../api/RequestCooperationApi';

const requestCooperation = document.querySelector('#RequestCooperationProvider');

if (requestCooperation) {
  const { id } = requestCooperation.dataset;
  const RequestCooperationProvider = () => (
    <div className="container">
      <RequestCooperation submitHandler={sendRequestCooperation} id={id} />
    </div>
  );

  ReactDOM.render(<RequestCooperationProvider />, requestCooperation);
}
