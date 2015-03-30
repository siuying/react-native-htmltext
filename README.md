# react-native-htmltext

Use HTML like markup to create stylized text in ReactNative.

## Example 

### Input

```javascript
render: function() {
  var html = `<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>`
  return (
    <View style={styles.container}>
      <HtmlText style={styles.welcome} html={html}></HtmlText>
    </View>
  );
}
```
<img src="https://raw.githubusercontent.com/siuying/react-native-htmltext/master/example1.png" />

### Input 

```javascript
render: function() {
  var html = `<blockquote><p>Hello world <b>world</b> <i>foo</i> <blockquote>bar hahh</blockquote></p></blockquote>`
  return (
    <View style={styles.container}>
      <HtmlText style={styles.welcome} html={html}></HtmlText>
    </View>
  );
}
```


<img src="https://raw.githubusercontent.com/siuying/react-native-htmltext/master/example2.png" />