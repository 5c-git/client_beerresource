import './RequestContactsProvider.scss';
import { createRoot } from "react-dom/client";
import RequestContacts from '../../../../react/RequestContacts/RequestContacts';
import { sendRequestContacts } from '../../../../api/RequestContactsApi';

const requestContacts = document.querySelector('#RequestContactsProvider');

if (requestContacts) {
  const { id } = requestContacts.dataset;
  const RequestContactsProvider = () => (
    <div className="container">
      <RequestContacts submitHandler={sendRequestContacts} id={id} />
    </div>
  );

  createRoot(requestContacts).render(<RequestContactsProvider />);
}
