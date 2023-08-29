import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        numero: 0,
        ultimo: null,
        botao: 'VAI'
        
      };

      //Dando partida nas funções dentro do costrutor
      this.vai = this.vai.bind(this);
      this.limpar = this.limpar.bind(this);

      //criando a variável do relógio
      this.timer = null;
      
    }

    vai(){

      if(this.timer != null){
        //aqui o timar tá girando, então vai parar
        clearInterval(this.timer);
        this.timer = null;

        this.setState({botao: 'VAI'});

      }else{
        //começa a girar o timer
        this.timer = setInterval( () => {
          //aqui o estado numero tem o acrescimo
          this.setState({numero: this.state.numero + 0.1})
        }, 100);

        this.setState({botao: 'PARAR'});
      }
      
    }

    limpar(){
      //aqui vamos parar e limpar
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
      }

      this.setState({
        ultimo: this.state.numero,
        numero: 0,
        botao: 'VAI'        
      })
      
    }

    render(){
        return(
            <View style={styles.container}>

              <Image
                source={require('./src/cronometro.png')}
                style={styles.cronometro}
              />
                <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>   

                <View style={styles.btnArea}>

                  <TouchableOpacity style={styles.btn} onPress={this.vai}>
                    <Text style={styles.btnTexto}> {this.state.botao} </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn} onPress={this.limpar}>
                    <Text style={styles.btnTexto}>LIMPAR</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.areaUltima}>
                  <Text style={styles.ultimoTempo}> 
                     {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(1) + 's' : ''} 
                  </Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -170,
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold'
  },
  cronometro:{
    width: 320,
    height: 320
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 110,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40
  },
  ultimoTempo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }

});

export default App;