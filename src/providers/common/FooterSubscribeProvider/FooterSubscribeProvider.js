import { createRoot } from "react-dom/client";
import FooterSubscribe from '../../../react/FooterSubscribe/FooterSubscribe';
import { sendFooterSubscribe } from '../../../api/FooterSubscribeApi';

const footerSubscribe = document.querySelector('#FooterSubscribeProvider');

if (footerSubscribe) {
  const { id } = footerSubscribe.dataset;
  const FooterSubscribeProvider = () => (
    <FooterSubscribe submitHandler={sendFooterSubscribe} id={id} />
  );

  createRoot(footerSubscribe).render(<FooterSubscribeProvider />);
}
