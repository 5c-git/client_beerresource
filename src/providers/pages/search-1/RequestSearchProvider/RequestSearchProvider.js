import './RequestSearchProvider.scss';
import { createRoot } from "react-dom/client";
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

  createRoot(requestSearch).render(<RequestSearchProvider />);
}
