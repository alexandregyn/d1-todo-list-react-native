import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import Trash from '../../assets/Trash.svg'
import Vector from '../../assets/Vector.svg'
import Check from '../../assets/Check.svg'

type Task = {
  name: string;
  concluded: boolean;
}

type Props = {
  task: Task,
  onRemove: () => void;
  onCheck: () => void;
}

export function Task({ task, onCheck, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonCheck}
        onPress={onCheck}
      > 
        {
          task.concluded ? <Check width={17.45} height={17.45}/> : <Vector width={17.45} height={17.45}/>
        }        
      </TouchableOpacity>
      { task.concluded ? 
        <Text style={styles.textUndli}>{task.name}</Text> : 
        <Text style={styles.text}>{task.name}</Text>
      }
      <TouchableOpacity 
        style={styles.buttonTrash}
        onPress={onRemove}
      >
        <Trash width={20} height={20}/>
      </TouchableOpacity>
    </View>
  );
}