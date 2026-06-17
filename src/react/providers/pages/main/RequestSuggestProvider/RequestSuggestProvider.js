import './RequestSuggestProvider.scss';
import { createRoot } from "react-dom/client";
import RequestSuggest from 'react/components/RequestSuggest/RequestSuggest';
import { sendRequestSuggest } from 'api/RequestSuggestApi';

const requestSuggest = document.querySelector('#RequestSuggestProvider');

if (requestSuggest) {
  const { id } = requestSuggest.dataset;
  const RequestSuggestProvider = () => (
    <RequestSuggest submitHandler={sendRequestSuggest} id={id} />
  );

  createRoot(requestSuggest).render(<RequestSuggestProvider />);
}
