import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: {
    name: string;
    level: string;
  }
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkills}
      {...rest}
    >
        <Text style={styles.textSkills}>
          <Text style={styles.title}>Tecnologia:</Text> {skill.name}
        </Text>
        <Text style={styles.textSkills}>
          <Text style={styles.title}>Experiência:</Text> {skill.level}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    padding: 15,
    alignItems: 'flex-start',
  },
  title: {
    color: '#C4AEE8',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textSkills: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
});