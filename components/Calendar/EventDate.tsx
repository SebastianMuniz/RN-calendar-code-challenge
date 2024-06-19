import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Action } from '@/models/ChallengeData';
import { CheckCircleIcon } from 'react-native-heroicons/solid'
import { dayNames } from '@/constants/calendar';
import { ClockIcon } from 'react-native-heroicons/outline';

type EventDateProps = {
  event?: Action;
}

const EventDate = (props: EventDateProps) => {
  const { event } = props;

  const getEventStatus = (status: string) => {
    if (status === 'Scheduled') {
      return <ClockIcon color={'#00B47D'} size={18} strokeWidth={2} />
    }
    if (status === 'Completed') {
      return <CheckCircleIcon color={'#00B47D'} size={18} />
    }
    if (status === 'Unscheduled') {
      return <Text style={style.tbdText}>TBD</Text>
    }
  }
  
  if (!event) return <View style={style.dateContainer} />

  return (
    <View style={style.dateContainer}>
      {event.scheduledDate && (
        <Text style={style.dateDay}>
          {dayNames[new Date(event.scheduledDate).getDay()].slice(0,3)}
        </Text>
      )}
      {event.scheduledDate && (
        <Text style={style.dateIcon}>
          {new Date(event.scheduledDate).getDate()}
        </Text>
      )}
      {getEventStatus(event.status)}
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
  dateContainer: {
    flex: 2,
    alignItems: 'center',
  },
  dateDay: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    marginBottom: 6,
  },
  dateIcon: {
    marginBottom: 6,
  },
  tbdText: {
    fontFamily: 'LatoRegular',
    fontSize: 9,
    color: '#000',
  },
});

export default EventDate;
