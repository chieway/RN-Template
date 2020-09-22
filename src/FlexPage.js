import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const list = [
  {id: 1, name: 'zs'},
  {id: 2, name: 'ls'},
  {id: 3, name: 'ww'},
  {id: 4, name: 'zl'},
  {id: 5, name: 'wq'},
];

export default function FlexPage() {
  const [loading, setLoading] = useState(false);
  const [dataArray, setDataArray] = useState(list);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const onRefresh = () => {
    setLoading(true);
    let arr = dataArray;
    setTimeout(() => {
      arr.push({id: '6', name: '张易炜'});
      setDataArray(arr);
      setLoading(false);
    }, 1000);
  };

  return (
    <FlatList
      data={dataArray}
      renderItem={_renderItem}
      style={styles.container}
      keyExtractor={(item) => item.name}
      refreshing={loading}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
  },
  item: {
    height: 200,
    backgroundColor: 'pink',
    margin: 10,
  },
});
