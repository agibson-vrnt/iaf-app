import React, { Component, View, Text, ListView, PropTypes } from "react-native";

var styles = {

	baseText: {

		fontSize: 20

	},
	headline: {

		fontSize: 30,
		color: '#F77'

	},
	quote: {

		margin: 10,
		marginBottom: 0,
		padding: 15,
		backgroundColor: "#EEE",
		borderRadius: 5

	},
	listView: {

    	paddingTop: 20,
    	backgroundColor: "white",

  	},

};
class QuoteList extends Component {

	render() {

		return <ListView

        	dataSource={this.props.dataSource}
        	renderRow={this.renderQuote}
	        style={styles.listView}
    	/>;

    }

    renderQuote( quote ) {

		quote.when = new Date( quote.when );
		return <View style={styles.quote}>
			<Text style={styles.baseText}>{quote.product.text} {quote.term.text}</Text>
			<Text style={styles.headline}>£{quote.price}</Text>
			<Text style={styles.baseText}>{quote.when.toDateString()}</Text>
		</View>;

	}

}
QuoteList.propTypes = { dataSource: PropTypes.object.isRequired };
export default QuoteList;

