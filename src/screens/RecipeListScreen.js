import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 16 }}>
      {/* Header */}
      <Header headerText={"Hi, John"} headerIcon={"bell-o"} />
      {/* Search */}
      <SearchFilter icon="search" />

      {/* Categories list */}
      <View style={{ marginTop: 22}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Categories</Text>
        {/* CategoriesFilter */}
        <CategoriesFilter />
      </View>

      {/* Recipe List Filter */}

      <View style={{ marginTop: 22, flex: 1, }}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Recipes</Text>
        {/* Recipe List */}
        <RecipeCard />
        
      </View>

    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})