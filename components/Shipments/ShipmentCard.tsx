import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Easing, ViewStyle } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../Button';
import { Shipment } from '@/types/shipment';
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

interface ShipmentCardProps {
    shipmentStatus: ShipmentStatus;
    isChecked: boolean;
    onToggleCheckbox: (name: string, isChecked: boolean) => void;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ shipmentStatus, isChecked, onToggleCheckbox }) => {
    const [expanded, setExpanded] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: expanded ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [expanded, heightAnim]);

    const heightInterpolate = heightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150],
    });

    const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
        height: heightInterpolate,
        overflow: 'hidden' as 'hidden',
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCheckboxToggle = () => {
        onToggleCheckbox(shipmentStatus.name, !isChecked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <CheckBox
                    checked={isChecked}
                    onPress={handleCheckboxToggle}
                    containerStyle={styles.checkboxContainer}
                    checkedColor={Colors.primary}
                />
                <Image
                    source={require('@/assets/icons/package.png')}
                    style={styles.packageImage}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>AWB</Text>
                    <Text style={styles.shipmentCode}>{shipmentStatus.name}</Text>
                    <Text style={styles.shipmentLocation}>{shipmentStatus.status}</Text>
                </View>
                <View>
                    <Text style={[styles.statusText, { color: shipmentStatus.color }]}>{shipmentStatus.status}</Text>
                </View>
                <TouchableOpacity style={styles.expandIconContainer} onPress={toggleExpand}>
                    <View style={styles.expandIcon}>
                        <Image
                            source={require('@/assets/icons/expand.png')}
                            style={styles.icon}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {expanded && (
                <Animated.View style={[styles.expandedContent, animatedStyle]}>
                    <View style={styles.expandedContentRow}>
                        <View>
                            <Text style={styles.expandedTextTitle}>Origin</Text>
                            <Text style={styles.expandedText}>{shipmentStatus.origin_city}</Text>
                            <Text style={styles.expandedTextSub}>{shipmentStatus.origin_address_line_1}</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="arrow-right"
                            color={Colors.primary}
                            size={30}
                        />
                        <View>
                            <Text style={styles.expandedTextTitle}>Destination</Text>
                            <Text style={styles.expandedText}>{shipmentStatus.destination_city}</Text>
                            <Text style={styles.expandedTextSub}>{shipmentStatus.destination_address_line_1}</Text>
                        </View>
                    </View>

                    <View style={styles.expandedContentBtnsContainer}>
                        <Button
                            title="Call"
                            style={[styles.expandedContentBtn, { backgroundColor: Colors.royalBlue200 }]}
                            iconLeft={<MaterialCommunityIcons name="phone" color="white" size={24} />}
                        />
                        <Button
                            title="WhatsApp"
                            style={[styles.expandedContentBtn, { backgroundColor: Colors.whatsappGreen }]}
                            iconLeft={<MaterialCommunityIcons name="whatsapp" color="white" size={24} />}
                        />
                    </View>
                </Animated.View>
            )}
        </View>
    );
};

export default ShipmentCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: Colors.ritual100,
        borderRadius: 10,
        marginVertical: 8,
    },
    packageImage: {
        width: 40,
        height: 40,
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
        marginRight: 19,
    },
    text: {
        fontSize: 13,
        color: Colors.ritual700,
    },
    shipmentCode: {
        fontSize: 18,
        fontWeight: 'semibold',
    },
    shipmentLocation: {
        fontSize: 13,
        color: Colors.ritual500,
    },
    statusText: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    icon: {
        width: 11,
        height: 11,
    },
    expandIconContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 5,
    },
    expandIcon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
    },
    expandedContent: {
        backgroundColor: Colors.ritual50,
        padding: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    expandedContentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    expandedTextTitle: {
        fontSize: 12,
        color: Colors.primary,
    },
    expandedText: {
        fontSize: 16,
        color: Colors.ritual700,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    expandedTextSub: {
        fontSize: 12,
        color: Colors.ritual500,
    },
    expandedContentBtnsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'flex-end',
        paddingTop: 10,
    },
    expandedContentBtn: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '48%',
    },
    checkboxContainer: {
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
    },
});