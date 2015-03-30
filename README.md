# react-native-htmltext

Use HTML like markup to create stylized text in ReactNative.

## Example 

### Input

```html
<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>
```

### Result

```html
<View>
  <Text>
    <Text>Hello world </Text>
    <Text>world</Text> 
    <Text> </Text> 
    <Text>foo</Text> 
    <Text> bar hahh</Text>
  </Text>
</View>
```

### Input 

```html
<blockquote><p>Hello world <b>world</b> <i>foo</i> <blockquote>bar hahh</blockquote></p></blockquote>
```

### Result

```
<View style={styles.blockquote}>
  <View style={styles.p}>
    <Text>
      <Text>Hello world </Text>
      <Text style={styles.b}>world</Text> 
      <Text> </Text> 
      <Text style={styles.i}>foo</Text> 
      <Text> </Text>
    </Text>
    <View style={styles.blockquote}>
      <Text>
        <Text> bar hahh</Text>
      </Text>
    </View>
  </View>
</View>
```
