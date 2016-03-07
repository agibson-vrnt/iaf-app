import React, { Component, View, Text, StyleSheet } from "react-native";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
class Loading extends Component {

	render() {

		return <View style={styles.container}>
    	    <Text>
        	  Loading quotes...
        	</Text>
      	</View>;

	}

}
export default Loading;

