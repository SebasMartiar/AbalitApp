/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, ActivityIndicator} from 'react-native';
// import {createStackNavigator, createAppContainer} from 'react-navigation';

// const MainNavigator = createStackNavigator({
//   VistaLogin: {screen: VistaLogin},
//   VistaRegistro: {screen: VistaRegistro},
//   VistaPost: {screen: VistaPost}
// });

// const App = createAppContainer(MainNavigator);

// export default App;


// export default class HelloWorldApp extends Component {
//   // render siempre necesario para devolver JSX
//   render() {
//     return (
//       <ScrollView>
//           <VistaLogin></VistaLogin>
//           <VistaRegistro></VistaRegistro>
//           <VistaPost></VistaPost>
//       </ScrollView>
//     );
//   }
// }

export default class VistaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor:'#00BCD4'}}>
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>

        <Image source={require('./img/background.9.png')} style={{height: 200, width: 200, }} />
          {/* style={{width: 193, height: 110}} */}
        
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, backgroundColor:'#007E91'}}
            placeholder="e-mail"
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
            style={{height: 40, backgroundColor:'#007E91', marginTop:20, marginBottom:20}}
            placeholder="contraseña"
            onChangeText={(password) => this.setState({password})}
          />
          <Button
              onPress={this._onPressButton}
              title="LOG IN"
              color="#00BCD4"
              backgroundColor="#ffffff"
            />
          <Text style={{color: 'blue'}}
            >No tienes cuenta? Registrate aquí!
          </Text>
        </View>
          
          <Text style={{color: 'blue'}}
          >Aviso legal</Text>

        </View>
      </ScrollView>
    );
  }
}

class VistaRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', usuario: '', password: '',};
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>

          <Image source={require('./img/background.9.png')} />
          {/* style={{width: 193, height: 110}} */}

          <View>
            <TextInput
              style={{height: 40}}
              placeholder="e-mail"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={{height: 40}}
              placeholder="nombre de usuario"
              onChangeText={(usuario) => this.setState({usuario})}
            />
            <TextInput
              style={{height: 40}}
              placeholder="contraseña"
              onChangeText={(password) => this.setState({password})}
            />
            <Button
              onPress={this._onPressButton}
              title="REGISTRARME"
              color="#841584"
            />
            <Text style={{color: 'blue'}}
            onPress={() => LinkingIOS.openURL('')}>Ya tienes cuenta? Entra aquí!</Text>
          </View>
          
          
          <Text style={{color: 'blue'}}
          onPress={() => LinkingIOS.openURL('')}>Aviso legal</Text>

        </View>
      </ScrollView>
    );
  }
}

class VistaPost extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-start" }}>
            <View>
              <Image source={{url: './img/ic_default_user.png'}}/>
              {/* style={{width: 193, height: 110}} */}
              <View>
                <Text>Bruce Miller</Text>
                <Text>@bmiller</Text>
              </View>
            </View>
            <Text>Hace 1 hora</Text>
          </View>
          <Image source={{url: './img/cat1.png'}}/>
              {/* style={{width: 193, height: 110}} */}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-start" }}>
            <View>
              <Image source={{url: './img/ic_like_empty.png'}}/>
              {/* style={{width: 193, height: 110}} */}
              <Text>0</Text>
              <Image source={{url: './img/ic_comment.png'}}/>
              {/* style={{width: 193, height: 110}} */}
              <Text>0</Text>
            </View>
            <Image source={{url: './img/ic_more.png'}}/>
          </View>
          <View>
            <Text>Post title</Text>
            <Text>Lorem ipsum, lorem ipsum, lorem ipsum lorem ipsum</Text>
            <View>
              <Image source={{url: './img/ic_location.png'}}/>
              <Text>Barcelona</Text>
            </View>
          </View>
          <View>
            <View>
                <Image source={{url: './img/ic_home.png'}}/>
                <Text>Inicio</Text>
            </View>
            <View>
                <Image source={{url: './img/ic_search.png'}}/>
                <Text>Buscar</Text>
            </View>
            <View>
                <Image source={{url: './img/ic_camera.png'}}/>
                <Text>Publicar</Text>
            </View>
            <View>
                <Image source={{url: './img/ic_notifications.png'}}/>
                <Text>Notificaciones</Text>
            </View>
            <View>
                <Image source={{url: './img/ic_user.png'}}/>
                <Text>Perfil</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class Comentarios extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-start" }}>
          <Image source={{url: './img/ic_user.png'}}/>
        </View>
      </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
