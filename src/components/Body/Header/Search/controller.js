export default {

    data() {

        return this.init();

    },


    mounted() {
        this.init();
    },

    computed: {

        'search': {
            get() {
                return this.$store.state.NS_search.search;
            },
            set(data) {
                this.$store.commit('NS_search/setState', data);
            }
        }
    },

    methods: {

        init() {

            let data = {
                form: {
                    search: {
                        required: true,
                        value: ''
                    }
                }
            }

            this.search = {
                ...this.search,
                form: data.form
            }

            return data;

        },






        changeValue(e) {
            this.form[e.target.name].value = e.target.value;
            this.search = {
                ...this.search,
                form: this.form
            }
        },







        doSearch(e) {

            e.preventDefault();

            // console.log('submit', this.form);
        }

    }

}