import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import Logo from '../../assets/Logo.svg';
import Plus from '../../assets/Plus.svg';
import { Task } from "../../components/Task";
import { styles } from "./style";

type Task = {
  name: string;
  concluded: boolean;
}

export function Home() {  
  const [tarefaNome, setTarefaNome] = useState<string>('');
  const [quantidadeCriada, setQuantidadeCriada] = useState<number>(0);
  const [quantidadeConculida, setQuantidadeConcluida] = useState<number>(0);
  const [tarefas, setTarefas] = useState<Array<Task>>([]);

  function handleTarefaAdd() {
    const existsTask = tarefas.some(item => item.name === tarefaNome);
    if (existsTask) {
      return Alert.alert('Erro', 'Tarefa já existe');
    }
    setQuantidadeCriada(tarefas.length + 1);
    setTarefas(prevState => [...prevState, { name: tarefaNome, concluded: false }]);
    setTarefaNome('');
  }

  function handleTarefaCheck(name: string) {
    const newListTasks = tarefas.map(item => {
      if (item.name === name) {
        item.concluded = !item.concluded;
      }
      return item;
    });
    setQuantidadeConcluida(newListTasks.reduce((sum, item) => (item.concluded ? ++sum : sum), 0));
    setTarefas(newListTasks);
  }

  function handleTarefaRemove(name: string) {
    Alert.alert('Atenção', `Deseja Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          const tasks = tarefas.filter(tarefa => tarefa.name !== name);
          setTarefas(tasks);
          setQuantidadeCriada(tasks.length);
          const tasksConcluida = tasks.filter(tarefa => tarefa.concluded === true);
          setQuantidadeConcluida(tasksConcluida.length);
          Alert.alert('Sucesso!', 'Deletado.');
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.subContainer}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione um nova tarefa"
            placeholderTextColor='#808080'
            onChangeText={setTarefaNome}
            value={tarefaNome}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={handleTarefaAdd}
          >
            <Plus width={20} height={20}/>
          </TouchableOpacity>
        </View>

        <View style={styles.progresso}>
          <View style={styles.progressoText}>
            <Text
              style={styles.criadas}>
              Criadas 
            </Text>
            <Text style={styles.progressoTextCount}>{quantidadeCriada}</Text>
          </View>

          <View  style={styles.progressoText}>
            <Text style={styles.concluidas}>
              Concluídas
            </Text>
            <Text style={styles.progressoTextCount}>{quantidadeConculida}</Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tarefas}
          keyExtractor={({ name }) => name}
          renderItem= {({ item }) => (
            <Task 
              key={item.name}
              task={item}
              onCheck={() => handleTarefaCheck(item.name)}
              onRemove={() => handleTarefaRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image
                style={styles.listEmptyImage}
                source={require('../../assets/Clipboard.png')}
              />
              <Text style={styles.listEmptyText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}