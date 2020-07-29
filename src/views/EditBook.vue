<template>
  <div>
    <div v-if="book">
    <h1>{{book.title}}</h1>
    </div>
    <p v-else>book not found</p>
    <form @submit.prevent="submit">
      <div class="input-field">
        <input id="LogoURL" v-model="logoUrl" type="text" class="validate" required>
      </div>
      <div class="input-field">
        <input id="title" v-model="title" type="text" class="validate" required value="book.title">
        <span class="helper-text" data-error="Title is required"></span>
      </div>
      <div class="input-field">
        <input id="author" v-model="author" type="text" class="validate" required>
        <span class="helper-text" data-error="Field 'Author' is required"></span>
      </div>
      <div class="input-field">
        <input type="text" ref="dateOfCreate">
      </div>
      <button class="btn" type="submit">Update book</button>
    </form>
  </div>
</template>

<script>
  export default {
    computed: {
      book() {
        return this.$store.getters.bookById(+this.$route.params.id)
      }
    },
    name: 'addBook',
    data: () => ({
      logoUrl: '',
      title: '',
      author: '',
      date: null
    }),
    mounted() {
      this.logoUrl = this.book.logoUrl;
      this.title = this.book.title;
      this.author = this.book.author;
      this.date = M.Datepicker.init(this.$refs.dateOfCreate, {
        format: 'dd.mm.yyyy',
        defaultDate: new Date(this.book.date),
        setDefaultDate: true
      })
    },
    methods: {
      submit() {
        this.$store.dispatch('updateBook', {
          logoUrl: this.logoUrl,
          id: this.book.id,
          title: this.title,
          author: this.author,
          date: this.date.date
        });
        this.$router.push('/');
      }
    },
    destroyed() {
      if (this.date && this.date.destroy) {
        this.date.destroy()
      }
    }
  }
</script>

<style lang="scss" scoped></style>
