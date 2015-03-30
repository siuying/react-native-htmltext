/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var HtmlText = require('./lib/HtmlText')

var HtmlTextApp = React.createClass({
  render: function() {
    var html = `<blockquote><p>Hello world <b>world</b> <i>foo</i> bar hahh</p><p>another line!</p></blockquote><p>this is a good example!</p>`

    return (
      <View style={styles.container}>
        <HtmlText style={styles.welcome} html={html}></HtmlText>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    margin: 10,

  },
  welcome: {
  }
});

AppRegistry.registerComponent('HtmlTextApp', () => HtmlTextApp);
