import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {Button, Header, Body, Left, Right, Title} from 'native-base';
export default class TodoApp extends React.Component {
  state = {
    items: [],
    item: '',
  };
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  constructor() {
    super();
    AsyncStorage.getItem('items').then((itemsJSON) => {
      if (itemsJSON) {
        this.setState({
          items: JSON.parse(itemsJSON),
        });
      }
    });
  }

  onChangeText = (text) => {
    this.setState({
      item: text,
    });
  };
  onNewItem = (e) => {
    const arr = [this.state.item, ...this.state.items];
    this.setState({
      items: arr,
      item: '',
    });
    this.save(arr);
  };

  save = (arr) => {
    AsyncStorage.setItem('items', JSON.stringify(arr));
  };

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{rowData}</Text>
        <Button
          success
          onPress={() => {
            this.state.items.splice(rowID, 1);
            this.setState({
              items: [...this.state.items],
            });
            this.save(this.state.items);
          }}
          style={{width: 70, justifyContent: 'center', borderRadius: 2}}>
          <Text style={{textAlign: 'center', color: 'white'}}>Done</Text>
        </Button>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Body>
            <Title
              style={{
                marginLeft: 10,
                fontFamily: 'Nunito-Bold',
                letterSpacing: 0.7,
              }}>
              Todo App
            </Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ToDo</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={this.onNewItem}
          placeholder="Add New Item"
          returnKeyType="done"
          onChangeText={this.onChangeText}
          value={this.state.item}
        />

        <ListView
          dataSource={this.ds.cloneWithRows(this.state.items)}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
  },
  doneButton: {
    padding: 10,
    backgroundColor: '#eaeaea',
  },
});
