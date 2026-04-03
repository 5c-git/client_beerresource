import './FormContacts.scss';

const FormContacts = (props) => {
  const {
    phones,
    mails,
    whatsapps,
    telegrams,
  } = props.contacts;
  return (
    <div className="FormContacts">
      {phones && (
        phones.map((phone, index) => {
          return (
            <a className="FormContacts__link" href={`tel:${phone.link}`} key={index}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-phone"></use>
              </svg><span>{phone.name}</span>
            </a>
          )
        })
      )}
      {mails && (
        mails.map((mail, index) => {
          return (
            <a className="FormContacts__link" href={`mailto:${mail.link}`} key={index}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-mail"></use>
              </svg><span>{mail.name}</span>
            </a>
          )
        })
      )}
      {whatsapps && (
        whatsapps.map((whatsapp, index) => {
          return (
            <a className="FormContacts__link" href={whatsapp.link} key={index}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-whatsup"></use>
              </svg><span>{whatsapp.name}</span>
            </a>
          )
        })
      )}
      {telegrams && (
        telegrams.map((telegram, index) => {
          return (
            <a className="FormContacts__link" href={telegram.link} key={index}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-telegram"></use>
              </svg><span>{telegram.name}</span>
            </a>
          )
        })
      )}


      {/* <a className="FormContacts__link" href="tel:+78127250088">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="#icon-contacts-phone"></use>
        </svg><span>+7(812)725-00-88</span>
      </a>
      <a className="FormContacts__link" href="tel:+79215886080">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="#icon-contacts-phone"></use>
        </svg><span>+7(921)588-60-80</span>
      </a>
      <a className="FormContacts__link" href="mailto:sales@resource.beer">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="#icon-contacts-mail"></use>
        </svg><span>sales@resource.beer</span>
      </a>
      <a className="FormContacts__link" href="https://wa.me/message/2T7BTTKPQ34SF1">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="#icon-contacts-whatsup"></use>
        </svg><span>Написать в WhatsApp</span>
      </a>
      <a className="FormContacts__link" href="https://t.me/resource_beer">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="#icon-contacts-telegram"></use>
        </svg><span>в Telegram</span>
      </a> */}
    </div >
  )
};

export default FormContacts;
