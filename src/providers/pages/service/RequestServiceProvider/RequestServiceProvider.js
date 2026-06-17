import './RequestServiceProvider.scss';
import { createRoot } from "react-dom/client";
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

  createRoot(requestService).render(<RequestServiceProvider />);
}
