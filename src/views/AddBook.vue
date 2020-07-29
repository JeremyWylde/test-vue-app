<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <H1>Add Book</H1>
            <form @submit.prevent="submit">
                <div class="input-field">
                    <input id="LogoURL" v-model="logoUrl" type="text" class="validate" required>
                    <label for="LogoURL">LogoURL</label>
                    <span class="helper-text" data-error="LogoURL is required"></span>
                </div>
                <div class="input-field">
                    <input id="title" v-model="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <span class="helper-text" data-error="Title is required"></span>
                </div>
                <div class="input-field">
                    <input id="author" v-model="author" type="text" class="validate" required>
                    <label for="author">Author</label>
                    <span class="helper-text" data-error="Field 'Author' is required"></span>
                </div>
                <div class="input-field">
                    <input type="text" ref="dateOfCreate">
                </div>
                <button class="btn" type="submit">Add book</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'addBook',
        data: () => ({
            logoUrl: '',
            title: '',
            author: '',
            date: null
        }),
        mounted() {
            this.date = M.Datepicker.init(this.$refs.dateOfCreate, {
                logoUrl: '',
                format: 'dd.mm.yyyy',
                defaultDate: new Date(),
                setDefaultDate: true,
            })
        },
        methods: {
            submit() {
                const book = {
                    logoUrl: this.logoUrl,
                    id: this.$store.state.books.length,
                    title: this.title,
                    author: this.author,
                    date: this.date.date
                };
                this.$store.dispatch('addBook', book);
                this.$router.push('/')
            }
        },
        destroyed() {
            if (this.date && this.date.destroy) {
                this.date.destroy()
            }
        }
    }
</script>

