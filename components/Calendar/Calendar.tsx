import React from 'react';
import type { Action, Calendar } from '@/app/models/ChallengeData';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import Event from './Event';
import { monthDictionary } from '@/constants/calendar';
import EmptyEvent from './EmptyEvent';

type CalendarProps = {
  monthlyData: Calendar[];
  customerStreet: string;
}

export default function CalendarWidget(props: CalendarProps) {
  const { monthlyData, customerStreet } = props;
  const sortedMonths = monthlyData.sort((a, b) => new Date(a.year, a.month).valueOf() - new Date(b.year, b.month).valueOf());

  return (
    <View style={style.calendar}>
      <FlatList
        data={sortedMonths}
        renderItem={({ item }) => {
          const { month, year, actions } = item;
          return (
            <View style={style.container}>
              <View style={style.monthYear}>
                <Text style={style.monthYearText}>{monthDictionary[month] ?? ''}</Text>
                <Text style={style.monthYearText}>{year}</Text>
              </View>
              <FlatList
                data={actions}
                ListEmptyComponent={<EmptyEvent />}
                renderItem={(item) => (
                  <Event
                    event={item}
                    customerStreet={customerStreet}
                  />
                )}
                keyExtractor={action => action.id}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  calendar: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  monthYear: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 15,
    padding: 20,
    paddingBottom: 15,
  },
  monthYearText: {
    fontFamily: 'LatoBold',
    fontSize: 16,
  },
});
