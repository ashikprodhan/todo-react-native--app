import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Task = ({text}) => {
    return (
        <View style={styles.item}  >
            <View style={styles.itemLeft} >
                <TouchableOpacity style={styles.square} ></TouchableOpacity>
            
         <Text style={styles.itemText} >{text}</Text> 
         </View> 
         <View style={styles.circle}>
             </View> 
        </View>
    );
};



const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
       

    },
    itemLeft:{
        flexDirection:"row",
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
      backgroundColor:'black',
      width:24,
      height:24 ,
      opacity:0.4 ,
      borderRadius:5,
      marginRight:20
    },
    itemText:{
        maxWidth:'80%',
    },
    circle:{
        width:12,
        height:12,
        borderColor:'#558CF6',
        borderRadius:5,
        borderWidth:2

    }
});
export default Task;