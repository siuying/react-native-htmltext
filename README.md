# react-native-htmltext

## Example 

```
<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>

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

```
<blockquote><p>Hello world <b>world</b> <i>foo</i> <blockquote>bar hahh</blockquote></p></blockquote>

<View style={styles.blockquote}>
  <View style={styles.p}>
    <Text>
      <Text>Hello world </Text>
      <Text>world</Text> 
      <Text> </Text> 
      <Text>foo</Text> 
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
