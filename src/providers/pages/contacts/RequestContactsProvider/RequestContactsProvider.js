import './RequestContactsProvider.scss';
import ReactDOM from 'react-dom';
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

  ReactDOM.render(<RequestContactsProvider />, requestContacts);
}
