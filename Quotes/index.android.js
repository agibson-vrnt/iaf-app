import React, { AppRegistry, Component, ListView } from "react-native";

import agent from "./shared/quotes-agent";
import Loading from "./shared/Loading";
import QuoteList from "./shared/QuoteList";

class Quotes extends Component {
  constructor( props ) {

    super( props );
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };

  }

  componentDidMount() {

    this.fetchData();

  }

  fetchData() {

    agent.fetchQuotes( ( err, quotes ) => this.setState( {

      dataSource: this.state.dataSource.cloneWithRows(quotes),
      loaded: true

    } ) );

  }

  render() {

    if( !this.state.loaded ) {

      return <Loading />;

    } else {

      return <QuoteList dataSource={this.state.dataSource} />;

    }

  }

}

AppRegistry.registerComponent('Quotes', () => Quotes);
