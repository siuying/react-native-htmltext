# react-native-htmltext

WIP: Experiment to use HTML like markup to create stylized text in react-native.

## Why?

React Native provide a Text element for stylized text. Instead of using ``NSAttributedString``, 
you creat nested Text:

```
<Text style={{fontWeight: 'bold'}}>
  I am bold 
  <Text style={{color: 'red'}}> and red </Text>
</Text>
```

While this approach is excellent for static interface text, what if we have dynamic text with format we 
do not know until we use it? ``HtmlText`` is a component to present a limited subset of HTML as
React Native views.

**Important**: This is not going to replace your ``WebView`` for HTML rendering, instead it use a
limited subset of HTML and try to present it using native ``Text`` elements in a reasonable way.

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