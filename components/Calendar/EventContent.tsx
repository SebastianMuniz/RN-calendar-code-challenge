import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { Action } from '@/models/ChallengeData';

type EventContentProps = {
  event: Action;
  customerStreet: string;
}

const EventContent = (props: EventContentProps) => {
  const {event, event: { vendor }, customerStreet } = props;

  const getStatusColor = (status: string) => {
    if (status === 'Scheduled') {
      return '#006A4B'
    }
    if (status === 'Completed') {
      return '#00B47D'
    }
    if (status === 'Unscheduled') {
      return '#011638'
    }
    return '#848FA5'
  }

  const getStatus = (status: string) => {
    if (status === 'Scheduled') {
      return `Scheduled ${event.arrivalStartWindow} - ${event.arrivalEndWindow}`
    }
    if (status === 'Completed') {
      return 'Completed'
    }
    if (status === 'Unscheduled') {
      return 'Schedule date & time TBD'
    }
  }

  return (
    <>
      <View style={{ ...style.eventDataContainer, backgroundColor: getStatusColor(event.status) }}>
        <View style={style.mainData}>
          <Text style={style.eventNameText}>{event.name}</Text>
          {vendor && (
            <>
              <Text style={style.vendorNameText}>{vendor.vendorName}</Text>
              <Text style={style.vendorPhoneText}>{vendor.phoneNumber}</Text>
            </>
          )}
      </View>
      <View style={style.secondaryData}>
        <View style={style.vendorAddress}>
        <MapPinIcon color={'#fff'} size={12}/>
        <Text style={style.customerAddressText}>{customerStreet}</Text>
      </View>
      </View>
        <Text style={style.statusMessage}>{getStatus(event.status)}</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  eventDataContainer: {
    flex: 8,
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
  },
  mainData: {
    flex: 1,
    paddingBottom: 20,
  },
  secondaryData: {
    flex: 1,
    flexDirection: 'row',
  },
  eventNameText: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    color: '#fff',
    paddingBottom: 2,
  },
  vendorNameText: {
    fontFamily: 'LatoRegular',
    fontSize: 12,
    color: '#fff',
  },
  vendorPhoneText: {
    fontFamily: 'LatoRegular',
    fontSize: 12,
    color: '#fff',
  },
  customerAddressText: {
    fontFamily: 'LatoLight',
    fontSize: 12,
    color: '#fff',
    marginLeft: 3,
  },
  vendorAddress: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
  statusMessage: {
    fontFamily: 'LatoLight',
    fontSize: 12,
    color: '#fff',
  }
});

export default EventContent;
