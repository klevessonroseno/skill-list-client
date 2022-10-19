import React, { useState, useEffect } from 'react';
import { 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  level: string;
}

export function Home() {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('');

  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    
    const data: SkillData = {
      id: String(new Date().getTime()),
      name: newSkillName,
      level: newSkillLevel,
    };

    setMySkills(oldState => [...oldState, data]);
  
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Bom dia!');
    }else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde!');
    }else {
      setGreeting('Boa noite!');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Seja bem vindo, Klevesson!
      </Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Nome da tecnologia"
        placeholderTextColor="#555"
        onChangeText={setNewSkillName}
      />

      <TextInput 
        style={styles.input}
        placeholder="Experiência"
        placeholderTextColor="#555"
        onChangeText={setNewSkillLevel}
      />

      <Button 
        title={'Adicionar'}
        onPress={handleAddNewSkill} 
      />

      <Text style={[styles.title, {marginVertical: 20}]}>
        Minhas Tecnologias
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <SkillCard 
              skill={item}
            />
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => handleRemoveSkill(item.id)}
            >
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.editButton}
              //onPress={() => handleRemoveSkill(item.id)}
            >
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      >      
      </FlatList>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F1E25',
    borderRadius: 10,
    marginVertical: 10
  },
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  deleteButton: {
    backgroundColor: '#544B63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 30,
  },
  deleteText: {
    color: '#C4AEE8',
    fontSize: 17,
    fontWeight: 'bold', 
  },
  editButton: {
    backgroundColor: '#C4AEE8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 30,
    marginBottom: 20
  },
  editText: {
    color: '#544B63',
    fontSize: 17,
    fontWeight: 'bold', 
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10
  },
  greetings: {
    color: '#fff',
  }
});