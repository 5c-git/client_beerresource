import './RequestSearchProvider.scss';
import ReactDOM from 'react-dom';
import RequestSearch from '../../../../react/RequestSearch/RequestSearch';
import { sendRequestSearch } from '../../../../api/RequestSearchApi';

const requestSearch = document.querySelector('#RequestSearchProvider');

if (requestSearch) {
  const { id } = requestSearch.dataset;
  const RequestSearchProvider = () => (
    <div className="container">
      <RequestSearch submitHandler={sendRequestSearch} id={id} />
    </div>
  );

  ReactDOM.render(<RequestSearchProvider />, requestSearch);
}
