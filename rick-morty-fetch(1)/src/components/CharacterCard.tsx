import React from "react";
import {View,Text,Image} from "react-native";
export default function CharacterCard({item}:any){return(<View><Image source={{uri:item.image}} style={{width:80,height:80}}/><Text>{item.name}</Text><Text>{item.species}</Text><Text>{item.status}</Text></View>)}