import './RequestSuggestProvider.scss';
import ReactDOM from 'react-dom';
import RequestSuggest from '../../../../react/RequestSuggest/RequestSuggest';
import { sendRequestSuggest } from '../../../../api/RequestSuggestApi';

const requestSuggest = document.querySelector('#RequestSuggestProvider');

if (requestSuggest) {
  const { id } = requestSuggest.dataset;
  const RequestSuggestProvider = () => (
    <RequestSuggest submitHandler={sendRequestSuggest} id={id} />
  );

  ReactDOM.render(<RequestSuggestProvider />, requestSuggest);
}
