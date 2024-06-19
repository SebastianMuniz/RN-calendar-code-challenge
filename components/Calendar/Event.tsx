import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Action } from '@/models/ChallengeData';
import { CheckCircleIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { dayNames } from '@/constants/calendar';
import { ClockIcon } from 'react-native-heroicons/outline';
import EventDate from './EventDate';
import EventContent from './EventContent';

type EventProps = {
  event: Action;
  customerStreet: string;
}

const Event = (props: EventProps) => {
  const { event: { item }, customerStreet } = props;
  return (
    <View style={style.eventContainer}>
      <EventDate event={item} />
      <EventContent event={item} customerStreet={customerStreet} />
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
});

export default Event;
