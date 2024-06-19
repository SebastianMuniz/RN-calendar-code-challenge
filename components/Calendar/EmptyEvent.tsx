import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventDate from './EventDate';

const EmptyEvent = () => {
  return (
    <View style={style.eventContainer}>
      <EventDate />
      <View style={style.dataContent}>
        <Text style={style.eventText}>No Maintenance Schedule</Text>
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  eventContainer: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginBottom: 5,
  },
  dataContent: {
    flex: 8,
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#848FA5',
  },
  eventText: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default EmptyEvent;
