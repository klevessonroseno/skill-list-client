import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkills}>
        <Text style={styles.textSkills}>
          {skill}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkills: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});