import { connect } from 'react-redux';
import withRoute from './withRoute';

export default function connectWithDeck(WrappedComponent) {
  function mapStateToProps({ decks }, { route }) {
    const { id } = route ? route.params : {};

    return !id
      ? {deck: {error: 'no data found'}}
      : {
        deck: decks && id && decks[id]
      };
  }

  return withRoute(connect(mapStateToProps)(WrappedComponent));
}
