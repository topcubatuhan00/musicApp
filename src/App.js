/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';

import data from '../data/data.json';

import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {

    const [songData, setSongData] = useState(data);

    const renderSong = ({ item }) => <SongCard song={item} />;
    const renderSeperator = () => <View style={styles.seperator} />;

    const handeSearch = text => {
        const filteredData = data.filter(song => {
                const searchText = text.toLowerCase();
                const currentTitle = song.title.toLowerCase();

                return currentTitle.indexOf(searchText) > -1;
            }
        );
        setSongData(filteredData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handeSearch}/>
            <FlatList
                keyExtractor={item => item.id}
                data={songData}
                renderItem={renderSong}
                ItemSeparatorComponent={renderSeperator}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    seperator: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
});

export default App;
