import propTypes from 'prop-types';
import { nanoid } from 'nanoid';

const keyId = nanoid();

export const ContactList = ({ contacts, handleDelete }) => {
  <div>
    <ul>
      {contacts.map((contact, keyId) => (
        <li key={keyId}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>;
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
