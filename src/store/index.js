import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: JSON.parse(localStorage.getItem('books') || '[]'),
  },
  mutations: {
    addBook(state, book) {
      state.books.push(book);
      localStorage.setItem('books', JSON.stringify(state.books))
    },
    updateBook(state, {id, logoUrl, title,author,date}){
      const books = state.books.concat();
      const index = books.findIndex(b => b.id === id );
      const task = books[index];
      books[index] = {...task, logoUrl, title, author, date};
      state.books = books;
      localStorage.setItem('books', JSON.stringify(state.books));
    }
  },
  actions: {
    addBook({commit}, book) {
      commit('addBook', book)
    },
    updateBook({commit}, book){
      commit('updateBook', book)
    }
  },
  getters:{
    bookById: s=> id => s.books.find(b => b.id === id)
  },
  modules: {
  }
})
