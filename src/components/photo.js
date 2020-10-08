import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Photo = ({file, count}) => {
    const [like, setLike] = useState(count);
    
    const increment = () => {
      setLike(like + 1);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={file} />
            <TouchableOpacity onPress={increment}>
                <Text>{like} LIKE</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
      
    },  

    text: {
        fontSize: 22,
        fontWeight: "bold",
    },

    image: {
        height: 180,
        width: 180,
    },  
      

});

export default Photo;