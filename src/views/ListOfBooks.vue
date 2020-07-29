<template>
    <div>
        <h1>Books</h1>

        <table v-if="this.$store.state.books.length">
            <thead>
            <tr>
                <th>Logo</th>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, i) of this.$store.state.books" :key='book.id'>
              <td><img  class="logo" :src='book.logoUrl'></td>
              <td>{{i+1}}</td>
              <td>{{book.title}}</td>
              <td>{{book.author}}</td>
              <td>{{new Date(book.date).toLocaleDateString()}}</td>
              <td>
                <router-link tag="button" class="btn btn-small" :to="'/editBook/' + book.id">
                  Edit book
                </router-link>
              </td>
            </tr>
            </tbody>
        </table>
        <p v-else>There is no books</p>
      <div class="btn-container">
        <router-link tag="button" class="btn btn-small1" :to="'/addBook'">
          Add new book
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .logo {
        height: 50px;
    }
    .btn-container{
        margin-top: 10px;
    }
</style>
