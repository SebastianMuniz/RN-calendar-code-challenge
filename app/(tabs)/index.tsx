import { fetchCalendarEvents } from '@/services/calendar';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ChallengeData } from '../models/ChallengeData';
import { CalendarWidget } from '@/components/Calendar';
import { defaultCalendar } from '@/constants/calendar';

export default function CalendarView() {
  const [calendarData, setCalendarData] = useState<ChallengeData>(defaultCalendar);
  // const colorScheme = useColorScheme();

  useEffect(() => {
    fetchCalendarEvents().then((data) => setCalendarData(data));
  }, []);

  const { calendar, customer } = calendarData;
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Calendar</Text>
      </View>
      {calendar.length > 0 && (
        <CalendarWidget monthlyData={calendar} customerStreet={customer.street} />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: 80,
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'LatoRegular',
    color: '#000',
  },

})