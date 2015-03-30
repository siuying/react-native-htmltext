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
    var html = `<blockquote><p>Hello world <b>world</b> <i>foo</i> <blockquote>bar hahh</blockquote></p></blockquote><p>This is another example.</p>`

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
