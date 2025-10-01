import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9e6',
  },

  divider: {
  height: 1,
  backgroundColor: '#e0e0e0',
  width: '100%',
  marginVertical: 0,
  },
  sectionTitleFirst: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 50,
    marginBottom: 15,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: 15,
    color: '#333',
  },
  
  // ESTILOS PARA CATEGORÍAS (LOS QUE FALTAN)
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    marginRight: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#444',
  },
  
  // ESTILOS PARA COMIDAS POPULARES
  popularGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  popularGridItem: {
    width: '30%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularGridImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  popularGridText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#444',
  },
  
  // ESTILOS PARA DETALLES (por si acaso)
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 90,
  },

  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  detailImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  ingredientsContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 16,
    shadowColor: '#7f6868ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ingredientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  ingredientText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  otherRecipes: {
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeLink: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007AFF',
  },
});