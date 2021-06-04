import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View ,Platform, TextInput, TouchableOpacity} from 'react-native';
import Task from './Components/Task';

export default function App() {

   const [task, setTask] = useState()
   const [taskList, setTaskList] = useState([])
   console.log(taskList);
   const handleAddTask=()=>{
      
      setTaskList([...taskList,task])
      setTask('');
      console.log(task,'seee here');
   }
   const completeTask=(index)=>{
          let taskCopy=[...taskList];
          taskCopy.splice(index, 1);
          setTaskList(taskCopy)
   }
  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper} >
          <Text style={styles.sectionTitle}>Daily Task</Text>
          <View style={styles.items} > 
          {
            taskList.map((task,index) => {
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask()}> 
                  <Task text={task}  ></Task>
                </TouchableOpacity>
              )
            })
          }
{/*           
            <Task text="task 1" ></Task>
            <Task text="task 2" ></Task> */}
          </View>
      </View>
      {/* write task */}
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper} >
        <TextInput placeholder="write the task" value={task} style={styles.textInput} onChangeText={text=>setTask(text)}  />
        <TouchableOpacity onPress={()=> handleAddTask()} > 
          <View style={styles.addWrapper}> 
          <Text style={styles.addText}  > + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  todoWrapper: {
  paddingTop:80,
  paddingHorizontal:20
  },
  sectionTitle:{
    // textAlign: 'center',
    fontWeight:'bold',
    fontSize:24
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  textInput:{
    paddingVertical:13,
    paddingHorizontal:15,
    backgroundColor:'#FFFFFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{}
});
