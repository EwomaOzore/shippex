import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Button from '@/components/Button';
import Shipments from '@/components/Shipments/Shipments';
import { useGetShipmentListQuery, useGetShipmentStatusListQuery } from '@/services/api';
import SearchInput from '@/components/SearchInput';
import { CheckBox } from 'react-native-elements';

const ShipmentsScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const { data: shipmentListData, refetch } = useGetShipmentListQuery({ filters: {} });
    const { data: shipmentStatusData } = useGetShipmentStatusListQuery();

    useEffect(() => {
        if (shipmentListData) {
            console.log('Shipment Data:', shipmentListData.message);
        }
    }, [shipmentListData]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    }, [refetch]);

    const handleOpenBottomSheet = () => bottomSheetRef.current?.expand();
    const handleCloseBottomSheet = () => bottomSheetRef.current?.close();

    const handleToggleStatus = (status: string) => {
        setSelectedStatuses((prevStatuses) =>
            prevStatuses.includes(status)
                ? prevStatuses.filter((item) => item !== status)
                : [...prevStatuses, status]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                contentContainerStyle={{ backgroundColor: '#fff' }}
            >
                <View>
                    <Text style={styles.helloText}>Hello,</Text>
                    <Text style={styles.name}>Ibrahim Shaker</Text>

                    <SearchInput value={searchTerm} onChangeText={setSearchTerm} />

                    <View style={styles.btnsContainer}>
                        <Button
                            title="Filters"
                            variant="tertiary"
                            iconLeft={<Image source={require('@/assets/icons/filter.png')} />}
                            onPress={handleOpenBottomSheet}
                            style={styles.btn}
                        />
                        <Button
                            title="Add Scan"
                            iconLeft={<Image source={require('@/assets/icons/scan.png')} />}
                            onPress={() => { }}
                            style={styles.btn}
                        />
                    </View>

                    {shipmentListData?.message?.length > 0 ? (
                        <Shipments shipmentStatuses={shipmentListData.message} />
                    ) : (
                        <Text style={styles.emptyText}>No shipments available</Text>
                    )}
                </View>
            </ScrollView>

            {/* Bottom Sheet for Filters */}
            <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['50%', '80%']} enablePanDownToClose>
                <View style={styles.bottomSheetHeader}>
                    <TouchableOpacity onPress={handleCloseBottomSheet}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.sheetTitle}>Filters</Text>
                    <TouchableOpacity onPress={handleCloseBottomSheet}>
                        <Text style={styles.doneText}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <Text style={styles.sectionTitle}>Shipment Status</Text>

                <View style={styles.statusList}>
                    {['Delivered', 'Pending', 'Shipped'].map((status) => (
                        <CheckBox
                            key={status}
                            title={status}
                            checked={selectedStatuses.includes(status)}
                            onPress={() => handleToggleStatus(status)}
                            containerStyle={styles.checkboxContainer}
                            checkedColor="blue"
                        />
                    ))}
                </View>
            </BottomSheet>
        </View>
    );
};

export default ShipmentsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        height: '100%',
    },
    helloText: {
        fontSize: 14,
        color: '#666',
    },
    name: {
        fontSize: 28,
        fontWeight: 'semibold',
        marginBottom: 24,
    },
    btnsContainer: {
        marginTop: 20,
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        position: 'relative',
    },
    btn: {
        flex: 1,
        paddingVertical: 10,
    },
    emptyText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    bottomSheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    cancelText: {
        color: 'blue',
        fontSize: 16,
    },
    doneText: {
        color: 'blue',
        fontSize: 16,
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    statusList: {
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
});