import React,{useEffect,useState} from "react";
import {View,Text,FlatList,ActivityIndicator} from "react-native";
import CharacterCard from "./components/CharacterCard";
import {getCharacters} from "./services/api";
export default function App(){
const [characters,setCharacters]=useState<any[]>([]);
const [loading,setLoading]=useState(true);
useEffect(()=>{(async()=>{const d=await getCharacters();setCharacters(d);setLoading(false);})();},[]);
if(loading)return <View><ActivityIndicator size="large"/><Text>Carregando...</Text></View>;
return <FlatList data={characters} keyExtractor={(i)=>String(i.id)} renderItem={({item})=><CharacterCard item={item}/>}/>;
}