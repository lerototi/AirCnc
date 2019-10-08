import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png'

export default function Login() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, [])

    return <SafeAreaView style={StyleSheet.container}>
            <Image style={styles.logo} source={logo}/>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            
        </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height:32,
        resizeMode: "contain",
        alignItems: "center",
        marginTop: 10
    }
})