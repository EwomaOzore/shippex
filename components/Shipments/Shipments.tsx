import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import ShipmentCard from './ShipmentCard';
import { CheckBox } from 'react-native-elements';

interface ShipmentStatus {
    name: string;
    status: string;
    color: string;
    origin_city: string;
    destination_city: string;
    origin_address_line_1: string;
    destination_address_line_1: string;
}

const Shipments = ({ shipmentStatuses }: { shipmentStatuses: ShipmentStatus[] }) => {
    const [isMarkAllChecked, setIsMarkAllChecked] = useState(false);
    const [checkedShipments, setCheckedShipments] = useState<Record<string, boolean>>({});

    const toggleMarkAll = () => {
        const newMarkAllState = !isMarkAllChecked;
        setIsMarkAllChecked(newMarkAllState);

        const updatedCheckedState = shipmentStatuses.reduce((acc, shipment) => {
            acc[shipment.name] = newMarkAllState;
            return acc;
        }, {} as Record<string, boolean>);
        setCheckedShipments(updatedCheckedState);
    };

    const handleShipmentToggle = (name: string, isChecked: boolean) => {
        setCheckedShipments((prevState) => ({
            ...prevState,
            [name]: isChecked,
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{ fontWeight: 'semibold', fontSize: 22 }}>Shipments</Text>
                <View style={styles.markAllContainer}>
                    <CheckBox
                        checked={isMarkAllChecked}
                        onPress={toggleMarkAll}
                        containerStyle={styles.checkboxContainer}
                        checkedColor={Colors.primary}
                    />
                    <Text style={{ fontSize: 18, color: Colors.primary }}>Mark All</Text>
                </View>
            </View>

            <FlatList
                data={shipmentStatuses}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <ShipmentCard
                        shipmentStatus={item}
                        isChecked={checkedShipments[item.name] || false}
                        onToggleCheckbox={handleShipmentToggle}
                    />
                )}
            />
        </View>
    );
};

export default Shipments;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    markAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxContainer: {
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
    },
});