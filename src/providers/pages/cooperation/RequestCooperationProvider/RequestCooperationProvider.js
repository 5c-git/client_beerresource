import './RequestCooperationProvider.scss';
import { createRoot } from "react-dom/client";
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

  createRoot(requestCooperation).render(<RequestCooperationProvider />);
}
